import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/CodeWithShashank.png";

const Sidebar = () => {

    return (

        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark w-100 padding0 rounded"
            // style={{ width: 280 }}
        >
            <Link
                to="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
                <span className="fs-4"><img src={Logo} alt="loading..." /></span>
            </Link>
            <hr />
            <ul className="nav flex-column mb-auto mx-2">
                
                <li>
                    <Link to="" className="nav-link ">
                        
                        About
                    </Link>
                </li>
                <li>
                    <Link to="education" className="nav-link ">
                        
                        Educational Qualification
                    </Link>
                </li>
                <li>
                    <Link to="experience" className="nav-link ">
                        
                        Experience
                    </Link>
                </li>
                <li>
                    <Link to="projects" className="nav-link ">

                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="skills" className="nav-link ">

                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="hobbies" className="nav-link ">

                        Hobbies
                    </Link>
                </li>
                <li>
                    <Link to="socials" className="nav-link ">

                        Socials
                    </Link>
                </li>
            </ul>
        </div>

    );

}

export default Sidebar;