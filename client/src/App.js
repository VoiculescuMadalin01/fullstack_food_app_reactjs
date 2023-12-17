import React from "react";
import {Route, Routes} from "react-router-dom";
// import Main from "./containers/Main";
import {Main, Login} from "./containers";

const App = () => {
    return (
        <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center bg-red-400">
            <Routes>
                <Route path="/*" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
