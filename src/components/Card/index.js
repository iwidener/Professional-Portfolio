import React from "react";
import img1 from "./visual-presentation1.png";
import img2 from "./visual-presentation2.png";
import img3 from "./visual-presentation3.png";
import img4 from "./visual-presentation4.png";
import img5 from "./visual-presentation5.png";
import img6 from "./visual-presentation6.png";
import "./style.css";

function Card(props) {
    return (

        <div className="cards">

            <div className="col-md-2">
                <div className="card" id="project1">
                    <img src={img1} alt="visual-presentation1" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Burger</h6>
                        <div className="card-text">
                            An app for restaurants so that the users can easily input the names of burgers and devour them. </div>
                        <div className="technologies">
                            <h6 className="techno-title text-dark">Technologies:</h6>
                            <div className="techno-list">JavaScript, HTML, CSS, jQuery, Node.js, ORMs, Express, Handlebars, MySQL</div>
                        </div>
                        <a href="https://github.com/iwidener/Burger" target="_blank" rel="noopener noreferrer" className="btn btn-success">GitHub Repo</a>
                        <a href="https://floating-eyrie-38357.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success">App Link</a>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card" id="project2">
                    <img src={img2} alt="visual-presentation2" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Hey Y'all!</h6>
                        <div className="card-text">
                            An app for the teachers to keep track of student attendance and improve the class management.</div>
                        <div className="technologies">
                            <h6 className="techno-title text-dark">Technologies:</h6>
                            <div className="techno-list">HTML, CSS, jQuery, Bootstrap, moment.js, APIs (weather and gender), modal</div>
                        </div>
                        <a href="https://github.com/kayla8693/classroom-self-checkin" target="_blank" rel="noopener noreferrer" className="btn btn-success">GitHub Repo</a>
                        <a href="https://kayla8693.github.io/classroom-self-checkin/" target="_blank" rel="noopener noreferrer" className="btn btn-success">App Link</a>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card" id="project3">
                    <img src={img3} alt="visual-presentation3" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Password Generator</h6>
                        <div className="card-text">
                            An app for the employee with access to sensitive data to generate a strong and secure password.</div>
                        <div className="technologies">
                            <h6 className="techno-title text-dark">Technologies:</h6>
                            <div className="techno-list">HTML, CSS, JavaScript, Bootstrap, responsive application, alert<br />
                            <br />
                            </div>
                        </div>
                        <a href="https://github.com/iwidener/Password-Generator" target="_blank" rel="noopener noreferrer" className="btn btn-success">GitHub Repo</a>
                        <a href="https://iwidener.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer" className="btn btn-success">App Link</a>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card" id="project4">
                    <img src={img4} alt="visual-presentation4" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Work Day Scheduler</h6>
                        <div className="card-text">
                            An app for employee with a busy schedule to add important events and manage time effectively.</div>
                        <div className="technologies">
                            <h6 className="techno-title text-dark">Technologies:</h6>
                            <div className="techno-list">HTML, CSS, jQuery, Bootstrap, moment.js, local storage, active day of the week/date</div>
                        </div>
                        <a href="https://github.com/iwidener/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer" className="btn btn-success">GitHub Repo</a>
                        <a href="https://iwidener.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer" className="btn btn-success">App Link</a>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card" id="project5">
                    <img src={img5} alt="visual-presentation5" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Friendly</h6>
                        <div className="card-text">
                            An app for the users to get connected with people based on similar interests and activities.</div>
                        <div className="technologies">
                            <h6 className="techno-title text-dark">Technologies:</h6>
                            <div className="techno-list">JavaScript, HTML, CSS, Node.js, Passport.js, MySQL, Sequelize,  Socket.io, Travis CI</div>
                        </div>
                        <a href="https://github.com/iwidener/Project-2" target="_blank" rel="noopener noreferrer" className="btn btn-success">GitHub Repo</a>
                        <a href="https://immense-garden-32852.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success">App Link</a>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="card" id="project6">
                    <img src={img6} alt="visual-presentation6" className="card-img-top" />

                    <div className="card-body text-dark">
                        <h6 className="title">Google Books Search</h6>
                        <div className="card-text">
                            An app for the users so that they can search for the books with the options to view, save or delete.</div>
                        <div className="technologies">
                            <h6 className="techno-title text-dark">Technologies:</h6>
                            <div className="techno-list">MongoDB, Express, React.js, Node.js, CSS, API (Google Books), Mongoose, axios</div>
                        </div>
                        <a href="https://github.com/iwidener/Google-Books-Search" target="_blank" rel="noopener noreferrer" className="btn btn-success">GitHub Repo</a>
                        <a href="https://google-books-search-star.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success">App Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;