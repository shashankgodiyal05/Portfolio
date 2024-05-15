import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Base = () => {

    return (

        <React.Fragment>

            <div className="d-flex w-75 mx-auto padding0 border rounded px-4 py-4 lightgray mt-5" >

                <div className="container w-50 mx-0" >

                    <Sidebar />

                </div>

                <div className="container b-1" >

                    <Outlet />

                </div>
                    
            </div>

        </React.Fragment>
    )

}

export default Base;