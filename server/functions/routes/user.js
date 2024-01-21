const router = require("express").Router();
const admin = require("firebase-admin");
let data = [];

router.get("/", (req, res) => {
    return res.send("Inside the user router");
});
router.get("/jwtVerification", async (req, res) => {
    if (!req.headers.authorization) {
        return res.status(500).send({msg: "Token not Found"});
    }
    const token = req.headers.authorization.split(" ")[1];
    // return res.status(200).send({token: token});
    try {
        const decodedValue = await admin.auth().verifyIdToken(token);
        if (!decodedValue) {
            return res
                .status(500)
                .json({success: false, msg: "Unauthorized access"});
        }
        return res.status(200).json({success: true, data: decodedValue});
    } catch (err) {
        return res.send({
            success: false,
            msg: `Error in extracting the token: ${err}`,
        });
    }
});

const listAllUsers = (nextpagetoken) => {
    admin
        .auth()
        .listUsers(1000, nextpagetoken)
        .then((listuserresult) => {
            listuserresult.users.forEach((userRecord) => {
                data.push(userRecord.toJSON());
            });
            if (listuserresult.pageToken) {
                listAllUsers(listuserresult.pageToken);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
listAllUsers();

router.get("/all", async (req, res) => {
    try {
        return res
            .status(200)
            .send({success: true, data: data, dataCount: data.length});
    } catch (err) {
        return res.send({
            success: false,
            msg: `Error in listing users: ${err}`,
        });
    }
});

module.exports = router;
