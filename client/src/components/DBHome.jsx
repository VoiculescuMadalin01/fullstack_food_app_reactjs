import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllProduct} from "../api";
import {setAllProducts} from "../context/actions/productActions";

function DBHome() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!products) {
            getAllProduct().then((data) => {
                dispatch(setAllProducts(data));
            });
        }
    }, []);

    return <div>DBHome</div>;
}

export default DBHome;
