import React, {useEffect, useState} from "react";
import Cart from "./Cart";
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {setOrders} from "../context/actions/ordersAction";
import {getAllOrders} from "../api";
import OrdersData from "./OrdersData";

function UsersOrder() {
    const isCart = useSelector((state) => state.isCart);
    const user = useSelector((state) => state.user);
    const orders = useSelector((state) => state.orders);

    const [userOrders, setUserOrders] = useState(null);

    const dispatch = useDispatch();
    useEffect(() => {
        if (!orders) {
            getAllOrders().then((data) => {
                dispatch(setOrders(data.reverse()));
                setUserOrders(
                    orders?.filter((order) => order?.userId === user?.user_id)
                );
            });
        } else {
            setUserOrders(
                orders?.filter((order) => order?.userId === user?.user_id)
            );
        }
    }, [orders]);
    useEffect(() => {
        if (!orders) {
            getAllOrders().then((data) => {
                dispatch(setOrders(data.reverse()));
                setUserOrders(
                    orders?.filter((order) => order?.userId === user?.user_id)
                );
            });
        } else {
            setUserOrders(
                orders?.filter((order) => order?.userId === user?.user_id)
            );
        }
    }, []);

    return (
        <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
            <Header />
            <div className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
                {userOrders && userOrders.length > 0 ? (
                    <>
                        {userOrders.map((item, i) => (
                            <OrdersData
                                key={item.orderId}
                                index={i}
                                data={item}
                                admin={false}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h1 className="text-[72px] text-headingColor font-bold">
                            No Data
                        </h1>
                    </>
                )}

                {isCart && <Cart />}
            </div>
        </main>
    );
}

export default UsersOrder;
