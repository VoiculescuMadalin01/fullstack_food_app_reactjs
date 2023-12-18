import axios from "axios";

export const baseUrl =
    "http://localhost:5001/fullstack-food-app-10ea2/us-central1/app";

export const validateUserJWTToken = async (token) => {
    try {
        const res = await axios.get(`${baseUrl}/api/users/jwtVerification`, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        return res.data.data;
    } catch (err) {
        return null;
    }
};
