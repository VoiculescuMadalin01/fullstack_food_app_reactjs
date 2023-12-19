import React from "react";
import {useDispatch} from "react-redux";
import {setUserDetails} from "../context/actions/userActions";
import {Link} from "react-router-dom";

function Main() {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(setUserDetails(null));
    };
    return (
        <div>
            <button onClick={logout} className="border-emerald-950">
                logout
            </button>

            <Link to={"login"}> Login</Link>
        </div>
    );
}

export default Main;
