import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllProduct, getAllOrders} from "../api";
import {setAllProducts} from "../context/actions/productActions";
import {setOrders} from "../context/actions/ordersAction";

import {CChart} from "@coreui/react-chartjs";

function DBHome() {
    const products = useSelector((state) => state.products);
    const orders = useSelector((state) => state.orders);

    const dispatch = useDispatch();

    const drinks = products?.filter(
        (item) => item.product_category === "drinks"
    );
    const deserts = products?.filter(
        (item) => item.product_category === "deserts"
    );
    const fruits = products?.filter(
        (item) => item.product_category === "fruits"
    );
    const rice = products?.filter((item) => item.product_category === "rice");
    const curry = products?.filter((item) => item.product_category === "curry");
    const chinese = products?.filter(
        (item) => item.product_category === "chinese"
    );
    const bread = products?.filter((item) => item.product_category === "bread");
    const ordersPreparing = orders?.filter(
        (order) => order?.sts === "preparing"
    );
    const ordersCancelled = orders?.filter(
        (order) => order?.sts === "cancelled"
    );
    const ordersDelivered = orders?.filter(
        (order) => order?.sts === "delivered"
    );

    useEffect(() => {
        if (!products) {
            getAllProduct().then((data) => {
                dispatch(setAllProducts(data));
            });
        }
        if (!orders) {
            getAllOrders().then((data) => {
                dispatch(setOrders(data));
            });
        }
    }, []);

    return (
        <div className=" flex items-center justify-center flex-col pt-6 w-full h-full">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <div className="flex items-center justify-center">
                    <div className="w-340 md:w-508">
                        <CChart
                            type="bar"
                            data={{
                                labels: [
                                    "Drinks",
                                    "Deserts",
                                    "Fruits",
                                    "Rice",
                                    "Curry",
                                    "Bread",
                                    "Chinese",
                                ],
                                datasets: [
                                    {
                                        label: "Category wise count",
                                        backgroundColor: "#f87979",
                                        data: [
                                            drinks?.length,
                                            deserts?.length,
                                            fruits?.length,
                                            rice?.length,
                                            curry?.length,
                                            bread?.length,
                                            chinese?.length,
                                        ],
                                    },
                                ],
                            }}
                            labels="months"
                        />
                    </div>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-275 md:w-460">
                        <CChart
                            type="doughnut"
                            data={{
                                labels: ["Preparing", "Delivered", "Cancelled"],
                                datasets: [
                                    {
                                        backgroundColor: [
                                            "rgb(249 115 22)	",
                                            "rgb(16 185 129)",
                                            " rgb(239 68 68)",
                                        ],
                                        data: [
                                            ordersPreparing.length,
                                            ordersDelivered.length,
                                            ordersCancelled.length,
                                        ],
                                    },
                                ],
                            }}
                        />{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DBHome;
