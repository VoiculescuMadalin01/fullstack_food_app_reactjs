import React, {useEffect} from "react";
import {Header, Home, HomeSlider} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {getAllProduct} from "../api";
import {setAllProducts} from "../context/actions/productActions";

function Main() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!products) {
            getAllProduct().then((data) => {
                dispatch(setAllProducts(data));
            });
        }
    });

    return (
        <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
            <Header />
            <div className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
                <Home />
                <HomeSlider />
            </div>
        </main>
    );
}

export default Main;
