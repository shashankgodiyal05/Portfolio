import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "../pages/Base";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Hobbies from "../pages/Hobbies";
import Socials from "../pages/Socials";

const Routing = () => {

    return (

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={<Base />} >

                    <Route path="" element={<About />} />
                    <Route path="education" element={<Education />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="hobbies" element={<Hobbies />} />
                    <Route path="socials" element={<Socials />} />

                </Route>

            </Routes>
        
        </BrowserRouter>
    )

}

export default Routing;