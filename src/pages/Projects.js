import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {

    return (

        <React.Fragment>

            <h1 className="my-3 mb-1"> PROJECTS </h1>
            <hr />

            <ul className="">
                
                <li className="my-3">

                    <p className="me-5 ms-2 data-1">
                        Currency Converter in Java <Link to="https://github.com/shashankgodiyal05/java-minor_project/tree/main/Currency-Converter" >source-code</Link>
                    </p>

                </li>

                <li className="my-3">

                    <p className="me-5 ms-2 data-1">
                        Distance Unit Converter in Java <Link to="https://github.com/shashankgodiyal05/java-minor_project/tree/main/Distance-Unit-Converter" >source-code</Link>
                    </p>
                    
                </li>

                <li className="my-3">

                    <p className="me-5 ms-2 data-1">
                        Student Management System in Java & MySql <Link to="https://github.com/shashankgodiyal05/java-major_project/tree/main/Student_management_system" >source-code</Link>
                    </p>

                </li>

                <li className="my-3">

                    <p className="me-5 ms-2 data-1">
                        Notepad in Python <Link to="https://github.com/shashankgodiyal05/java-major_project/tree/main/Student_management_system" >source-code</Link>
                    </p>

                </li>

            </ul>

        </React.Fragment>

    )

}

export default Projects;