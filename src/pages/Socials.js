import React from "react";
import { Link } from "react-router-dom";

const Socials = () => {

    return (

        <React.Fragment>

            <h1 className="mt-3 mb-1">SOCIALS</h1>
            <hr/>

            <ul className="list">

                <li className="mx-3 my-5">

                    <Link to="https://twitter.com/GodiyalShashank" >

                    <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
                         <span className="ms-3 fs-3 text-dark">GodiyalShashank</span>
                    
                    </Link>

                </li>

                <li className="mx-3 my-5">

                    <Link to="https://github.com/shashankgodiyal05" >

                        <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                         <span className="ms-3 fs-3 text-dark">shashankgodiyal05</span>

                    </Link>

                </li>

                <li className="mx-3 my-5">

                    <Link to="https://www.linkedin.com/in/shashank-godiyal-9bbb46193/" >
                        
                        <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                         <span className="ms-3 fs-3 text-dark">Shashank Godiyal</span>

                    </Link>

                </li>

                <li className="mx-3 my-5">

                    <Link to="mailto:godiyalshashank@gmail.com" >
                        
                        <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                         <span className="ms-3 fs-3 text-dark">godiyalshashank@gmail.com</span>

                    </Link>

                </li>

            </ul>

        </React.Fragment>

    )

}

export default Socials;