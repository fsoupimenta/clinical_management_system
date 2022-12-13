import React from "react";

import SideBarItem from "./SideBarItem";
import "./css/SideBar.css"

import {Link} from 'react-router-dom'

const SideBar = () => {
    return (
        <>
            <div className="side-bar-container">
                <Link to={"/"}>
                    <SideBarItem item = "Home" />
                </Link>
                <Link to={"/Patient"}>
                    <SideBarItem item = "Patient" />
                </Link>
                <Link to={"/Dentist"}>
                    <SideBarItem item = "Dentist" />
                </Link>
                <SideBarItem item = "Schedule" />
                <SideBarItem item = "Procedure" />
                <SideBarItem item = "Speciality" />
                <SideBarItem item = "Health Insurance" />
                <SideBarItem item = "Recepcionist" />
                <SideBarItem item = "Financial" />
                <SideBarItem item = "Report" />
            </div>
        </>
    )
};

export default SideBar