import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllUsers} from "../api";
import {setAllUserDetails} from "../context/actions/allUsersAction";

function DBUsers() {
    const allUsers = useSelector((state) => state.allUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!allUsers) {
            getAllUsers().then((data) => {
                dispatch(setAllUserDetails(data));
            });
        }
    }, []);

    return <div>DBUsers</div>;
}

export default DBUsers;
