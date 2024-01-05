import React from "react";
import {
    DBHeader,
    DBHome,
    DBItems,
    DBNewItems,
    DBOrders,
    DBUsers,
} from "../components";
import {Route, Routes} from "react-router-dom";

function DBRightSection() {
    return (
        <div className="flex flex-col py-12 px-12 flex-1 h-full">
            <DBHeader />
            <div className=" flex flex-col flex-1 overflow-y-scroll scrollbar-none">
                <Routes>
                    <Route exact path="/home" element={<DBHome />} />
                    <Route exact path="/orders" element={<DBOrders />} />
                    <Route path="/items" element={<DBItems />} />
                    <Route path="/newItem" element={<DBNewItems />} />
                    <Route path="/users" element={<DBUsers />} />
                </Routes>
            </div>
        </div>
    );
}

export default DBRightSection;
