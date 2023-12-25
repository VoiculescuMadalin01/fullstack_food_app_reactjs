import React from "react";
import DBRightSection from "../components/DBRightSection";
import {DBLeftSection} from "../components";

function Dashboard() {
    return (
        <div className="w-screen h-screen flex items-center bg-primary">
            <DBLeftSection />
            <DBRightSection />
        </div>
    );
}

export default Dashboard;
