import React from "react";
import {NavLink} from "react-router-dom";
import {Logo} from "../assets";
import {isActiveStyles, isNotActiveStyles} from "../utils/style";

function DBLeftSection() {
    return (
        <div className="h-full py-12 flex flex-col bg-lightOverlay backdrop-blur-md shadow-md min-w-210 w-300 gap-3">
            <NavLink
                to={"/"}
                className="flex items-center justify-start px-6 gap-4"
            >
                <img src={Logo} alt="logo" className="w-12" />
                <p className="font-semibold text-xl">City</p>
            </NavLink>
            <hr />
            <ul className="flex flex-col gap-4">
                <NavLink
                    className={({isActive}) =>
                        isActive
                            ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
                            : isNotActiveStyles
                    }
                    to={"dashboard/home"}
                >
                    Home
                </NavLink>
                <NavLink
                    className={({isActive}) =>
                        isActive
                            ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
                            : isNotActiveStyles
                    }
                    to={"dashboard/orders"}
                >
                    Orders
                </NavLink>
                <NavLink
                    className={({isActive}) =>
                        isActive
                            ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
                            : isNotActiveStyles
                    }
                    to={"dashboard/items"}
                >
                    Items
                </NavLink>
                <NavLink
                    className={({isActive}) =>
                        isActive
                            ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
                            : isNotActiveStyles
                    }
                    to={"dashboard/newItem"}
                >
                    Add New item
                </NavLink>
                <NavLink
                    className={({isActive}) =>
                        isActive
                            ? `${isActiveStyles} px-4 py-2 border-l-8 border-red-500`
                            : isNotActiveStyles
                    }
                    to={"dashboard/users"}
                >
                    Users
                </NavLink>
            </ul>
            <div className="w-full items-center justify-center flex h-225 mt-auto px-2 ">
                <div className="w-full h-full rounded-md bg-red-400 flex justify-center items-center flex-col gap-3 px-3">
                    <div className="w-12 h-12  border bg-white  rounded-full flex items-center justify-center">
                        <p className="text-2xl font-bold text-red-500">?</p>
                    </div>
                    <p className="text-xl font-semibold text-primary">
                        Help Center
                    </p>
                    <p className="text-base text-gray-300 text-center">
                        Having troubles with City.Please contact us for more
                        questions.
                    </p>
                    <p className="px-4 py-2 rounded-full  bg-primary text-red-400 cursor-pointer">
                        Get in touch
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DBLeftSection;
