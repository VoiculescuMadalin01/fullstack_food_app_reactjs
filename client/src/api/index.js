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

export const addNewProduct = async (data) => {
    console.log(data);
    try {
        const res = await axios.post(`${baseUrl}/api/products/create`, {
            ...data,
        });
        return res.data.data;
    } catch (err) {
        return null;
    }
};

export const getAllProduct = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/products/all`);
        return res.data.data;
    } catch (err) {
        return null;
    }
};

export const deleteProduct = async (productId) => {
    try {
        const res = await axios.delete(
            `${baseUrl}/api/products/delete/${productId}`
        );
        return res.data.data;
    } catch (err) {
        return null;
    }
};
export const getAllUsers = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/users/all`);
        return res.data.data;
    } catch (err) {
        return null;
    }
};

//add product to cart
export const addNewItemToCart = async (user_id, data) => {
    try {
        const res = await axios.post(
            `${baseUrl}/api/products/addToCart/${user_id}`,
            {...data}
        );
        return res.data.data;
    } catch (error) {
        return null;
    }
};
export const getAllCartItems = async (user_id) => {
    try {
        const res = await axios.get(
            `${baseUrl}/api/products/getCartItems/${user_id}`
        );
        return res.data.data;
    } catch (error) {
        return null;
    }
};
