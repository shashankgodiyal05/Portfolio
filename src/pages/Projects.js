import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {

    function changeText(event) {

        var spanElement = event.currentTarget.querySelector('span');
        spanElement.textContent = "This Same Website";

    }

    return (

        <React.Fragment>

            <h1 className="my-3 mb-1"> PROJECTS </h1>
            <hr />

            <ul className="mt-4">

                <li className="my-3" onMouseOver={changeText}>

                    <p className="me-5 ms-2 data-1">
                        <span>Portfolio Website</span > (ReactJs, JavaScript, HTML, CSS, Bootstrap, FontAwesome) <Link to="https://github.com/shashankgodiyal05/Portfolio">source-code</Link>
                    </p>

                </li>

                <li className="my-3">

                    <p className="me-5 ms-2 data-1">
                        NewHub (ReactJs, JavaScript, HTML, CSS, Bootstrap, NEWSAPI) <Link to="https://github.com/shashankgodiyal05/NewsHub">source-code</Link>
                    </p>

                </li>

                <li className="my-3">

                    <p className="me-5 ms-2 data-1">
                        Notepad (Python, Tkinter) <Link to="https://github.com/shashankgodiyal05/java-major_project/tree/main/Student_management_system" >source-code</Link>
                    </p>

                </li>
                
                <li className="my-3">

                    <p className="me-5 ms-2 data-1">
                        Currency Converter (Java) <Link to="https://github.com/shashankgodiyal05/java-minor_project/tree/main/Currency-Converter" >source-code</Link>
                    </p>

                </li>

                <li className="my-3">

                    <p className="me-5 ms-2 data-1">
                        Distance Unit Converter (Java) <Link to="https://github.com/shashankgodiyal05/java-minor_project/tree/main/Distance-Unit-Converter" >source-code</Link>
                    </p>
                    
                </li>

                <li className="my-3">

                    <p className="me-5 ms-2 data-1">
                        Student Management System (Java, MySQL) <Link to="https://github.com/shashankgodiyal05/java-major_project/tree/main/Student_management_system" >source-code</Link>
                    </p>

                </li>

            </ul>

        </React.Fragment>

    )

}

export default Projects;