import React from "react";
import {useSelector} from "react-redux";

function DBHeader() {
    const user = useSelector((state) => state.user);
    return (
        <div className="w-full flex items-center justify-between gap-3">
            <p className="text-2xl text-headingColor">
                Welcome to City,
                {user?.name && (
                    <span className="block text-base text-gray-500">{`Hello    ${user?.name}...!`}</span>
                )}
            </p>
        </div>
    );
}

export default DBHeader;
