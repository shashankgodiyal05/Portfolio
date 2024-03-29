import React from "react";

const About = () => {

    return (

        <React.Fragment>

            <h1 className="mt-3 mb-1"> ABOUT </h1>
            <hr />

            <ul className="list mt-4">

                <li className="my-3" >

                    <h3> Name: </h3>
                    <p className="me-5 data" >
                        - Shashank Godiyal
                    </p>
                    <br />

                </li>

                <li className="my-3" >

                    <h3> Date Of Birth: </h3>
                    <p className="me-5 data" >
                        - 30-07-2001
                    </p>
                    <br />

                </li>

                <li className="my-3" >

                    <h3> Gender: </h3>
                    <p className="me-5 data" >
                        - Male
                    </p>
                    <br />

                </li>

                <li className="my-3">

                    <h3>Address:</h3> 
                    <p className="me-5 data">- Ghaziabad, Uttar Pradesh, India. </p>
                    <br />
                    
                </li>

                <li className="my-3">

                    <h3>Email:</h3> 
                    <p className="me-5 data">- godiyalshashank@gmail.com </p>
                    <br />
                    
                </li>

            </ul>

        </React.Fragment>
    )
}

export default About;