import React, {useState} from "react";
import {statuses} from "../utils/style";
import {Spinner} from "../components";
import {FaCloudUploadAlt} from "../assets/icons";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../config/firebase.config";
import {useDispatch, useSelector} from "react-redux";
import {
    alertDanger,
    alertNull,
    alertSuccess,
} from "../context/actions/alertActions";

function DBNewItems() {
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState(null);
    const [price, setPrice] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(null);
    const [imageDownloadURL, setImageDownloadURL] = useState(null);

    const alert = useSelector((state) => state.alert);
    const dispatch = useDispatch();

    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        const storageRef = ref(
            storage,
            `Images/${Date.now()}_${imageFile.name}`
        );
        console.log(storageRef);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setProgress(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (error) => {
                dispatch(alertDanger(`Error : ${error}`));
                setTimeout(() => {
                    dispatch(alertNull());
                }, 5000);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    setImageDownloadURL(downloadURL);
                    setIsLoading(false);
                    setProgress(null);
                    dispatch(alertSuccess("Image Uploaded to the cloud"));
                    setTimeout(() => {
                        dispatch(alertNull());
                    }, 5000);
                });
            }
        );
    };

    return (
        <div className="flex items-center justify-center flex-col pt-6 px-24 w-full">
            <div className="border border-gray-300 rounded-e-md p-4 w-full flex flex-col items-center gap-4">
                <InputValueField
                    type={"text"}
                    placeHolder={"Item name here"}
                    stateFunc={setItemName}
                    stateValue={itemName}
                />
                <div className="w-full flex items-center justify-center gap-3 flex-wrap">
                    {statuses &&
                        statuses?.map((status) => (
                            <p
                                key={status.id}
                                className={`px-4 py-3 rounded-md text-xl text-textColor font-semibold cursor-pointer hover:shadow-md border border-gray-200 backdrop-blur-md ${
                                    status.category === category
                                        ? "bg-red-400 text-primary"
                                        : "bg-transparent"
                                }`}
                                onClick={() => {
                                    setCategory(status.category);
                                }}
                            >
                                {status.title}
                            </p>
                        ))}
                </div>
                <InputValueField
                    type={"number"}
                    placeHolder={"Set item price"}
                    stateFunc={setPrice}
                    stateValue={price}
                />
                <div className="w-full bg-card backdrop-blur-md h-370 rounded-md border-2 border-dotted border-gray-300 cursor-pointer">
                    {isLoading ? (
                        <div className="w-full h-full flex flex-col items-center justify-evenly px-24">
                            <Spinner />
                            {progress}
                        </div>
                    ) : (
                        <>
                            {!imageDownloadURL ? (
                                <>
                                    <label>
                                        <div className="flex flex-col items-center justify-center h-full w-full cursor-pointer">
                                            <div className="flex flex-col justify-center items-center cursor-pointer">
                                                <p className="font-bold text-4xl">
                                                    <FaCloudUploadAlt className="-rotate-0" />
                                                </p>
                                                <p className="text-lg text-textColor">
                                                    Click to upload an image
                                                </p>
                                            </div>
                                        </div>
                                        <input
                                            type="file"
                                            name="upload-image"
                                            accept="image/*"
                                            className="w-0 h-0"
                                            onChange={uploadImage}
                                        />
                                    </label>
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export const InputValueField = ({type, placeHolder, stateValue, stateFunc}) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeHolder}
                className="w-full px-4 py-3 bg-lightOverlay shadow-md outline-none rounded-md border border-gray-200 focus:border-red-400"
                value={stateValue}
                onChange={(e) => stateFunc(e.target.value)}
            />
        </>
    );
};

export default DBNewItems;
