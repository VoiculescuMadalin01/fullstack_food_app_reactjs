import React from "react";
import {HiCurrencyDollar} from "react-icons/hi2";
import {motion} from "framer-motion";
import {buttonClick} from "../animations";
import {IoBasket} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {addNewItemToCart, getAllCartItems} from "../api";
import {alertNull, alertSuccess} from "../context/actions/alertActions";
import {setCartItems} from "../context/actions/cartActions";

function SliderCard({data}) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const sendToCart = () => {
        addNewItemToCart(user?.user_id, data).then((res) => {
            dispatch(alertSuccess("Added to cart"));
            getAllCartItems(user?.user_id).then((items) => {
                dispatch(setCartItems(items));
            });
            setTimeout(() => {
                dispatch(alertNull());
            }, 3000);
        });
    };
    return (
        <div className="bg-lightOverlay hover:drop-shadow-lg backdrop-blur-md rounded-xl flex items-center justify-between relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-2">
            <img
                src={data.imageURL}
                alt="card image"
                className="w-40 h-40 object-contain"
            />
            <div className="relative pt-12">
                <p className="text-xl font-semibold text-headingColor">
                    {data.product_name}
                </p>
                <p className="text-lg font-semibold text-red-500 flex items-center justify-center gap-1">
                    <HiCurrencyDollar className="text-red-500" />{" "}
                    {parseFloat(data.product_price).toFixed(2)}
                </p>
                <motion.div
                    {...buttonClick}
                    onClick={sendToCart}
                    className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 right-2 cursor-pointer"
                >
                    <IoBasket className="text-2xl text-primary" />
                </motion.div>
            </div>
        </div>
    );
}

export default SliderCard;
