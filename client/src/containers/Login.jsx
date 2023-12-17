import React, {useState} from "react";
import {LoginBg, Logo} from "../assets";
import {LoginInput} from "../components";
import {FaEnvelope} from "../assets/icons";

function Login() {
    const [userEmail, setUserEmail] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="w-screen h-screen relative flex overflow-hidden">
            {/*background image */}
            <img
                src={LoginBg}
                alt="login background"
                className="w-full h-full object-cover absolute top-0 left-0 "
            />
            {/* login box */}
            <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
                {/* logo section */}
                <div className="flex items-center justify-start gap-4 w-full">
                    <img src={Logo} alt="logo" className="w-8" />
                    <p className="text-headingColor font-semibold text-2xl">
                        City
                    </p>
                </div>
                {/* welcome text */}
                <p className="text-3xl font-semibold text-headingColor">
                    Welcome Back
                </p>
                <p className="text-lg text-textColor -mt-6 ">
                    Sign in with the follwing
                </p>
                {/* input section */}
                <div className=" w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
                    <LoginInput
                        placeholder={"Email Here"}
                        icon={
                            <FaEnvelope className=" text-xl text-textColor" />
                        }
                        inputState={userEmail}
                        inputStateFunc={setUserEmail}
                        type={"email"}
                        isSignUp={isSignUp}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
