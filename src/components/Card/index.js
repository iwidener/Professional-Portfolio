import React from "react";
import img1 from "./visual-presentation1.png";
import img2 from "./visual-presentation2.png";
import img3 from "./visual-presentation3.png";
import img4 from "./visual-presentation4.png";
import img5 from "./visual-presentation5.png";
// import img6 from "./vusual-presentation6.png";
import "./style.css";

function Card(props) {
    return (

        <div className="cards">

            <div className="container">
                <div className="card" id="project1">
                    <img src={img1} alt="visual-presentation1" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Burger</h6>
                        <p className="card-text text-secondary">
                            An app for the restaurants so that the users can easily input the names of burgers and devour them. </p>
                        <a href="https://github.com/iwidener/Burger" className="btn btn-success">GitHub Repo</a>
                        <a href="https://floating-eyrie-38357.herokuapp.com/" className="btn btn-success">Deployed Link</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card" id="project2">
                    <img src={img2} alt="visual-presentation2" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Hey Y'all!</h6>
                        <p className="card-text text-secondary">
                            An app for the teachers to keep track of students' attendance and improve the class management.</p>
                        <a href="https://github.com/kayla8693/classroom-self-checkin" className="btn btn-success">GitHub Repo</a>
                        <a href="https://kayla8693.github.io/classroom-self-checkin/" className="btn btn-success">Deployed Link</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card" id="project3">
                    <img src={img3} alt="visual-presentation3" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Work Day Scheduler</h6>
                        <p className="card-text text-secondary">
                            An app for the employee with access to sensitive data to generate a strong and secure password.</p>
                        <a href="https://github.com/iwidener/Work-Day-Scheduler" className="btn btn-success">GitHub Repo</a>
                        <a href="https://iwidener.github.io/Work-Day-Scheduler/" className="btn btn-success">Deployed Link</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card" id="project4">
                    <img src={img4} alt="visual-presentation4" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Password Generator</h6>
                        <p className="card-text text-secondary">
                            An app for the employee with a busy schedule to add important events and manage time effectively.</p>
                        <a href="https://github.com/iwidener/Password-Generator" className="btn btn-success">GitHub Repo</a>
                        <a href="https://iwidener.github.io/Password-Generator/" className="btn btn-success">Deployed Link</a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="card" id="project5">
                    <img src={img5} alt="visual-presentation5" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Friendly</h6>
                        <p className="card-text text-secondary">
                            An app for the user to get connected with people based on similar interests and activities.</p>
                        <a href="https://github.com/iwidener/Project-2" className="btn btn-success">GitHub Repo</a>
                        <a href="https://immense-garden-32852.herokuapp.com/" className="btn btn-success">Deployed Link</a>
                    </div>
                </div>
            </div>

            {/* <div className="container">
                <div className="card" id="project6">
                    <img src={img6} alt="visual-presentation6" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Friendly</h6>
                        <p className="card-text text-secondary">
                            An app for the user to get connected with people based on similar interests and activities.</p>
                        <a href="https://github.com/iwidener/Project-2" className="btn btn-success">GitHub Repo</a>
                        <a href="https://immense-garden-32852.herokuapp.com/" className="btn btn-success">Deployed Link</a>
                    </div>
                </div>
            </div> */}
            
        </div>

    );
}

export default Card;