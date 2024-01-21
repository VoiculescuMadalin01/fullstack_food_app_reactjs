import React from "react";
import {Header, Home} from "../components";

function Main() {
    return (
        <main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
            <Header />
            <div className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
                <Home />
            </div>
        </main>
    );
}

export default Main;
