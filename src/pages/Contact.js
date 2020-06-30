import React from "react";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Column from "../components/Column";
import "../App.css";

function About() {
    return (
        <div>
            <Jumbotron>
                <Row>
                    <Column size="md-12">
                        <div className="contact-message">
                            <p>I am open to work and collaborate on new coding challenges. I'm looking forward to hearing from you.</p>
                            <p> Please, send me a <a href="mailto:iwide2019@gmail.com" target="_blank" rel="noopener noreferrer">message</a> and I will reply you right away.</p>
                            <p>Thank you for visiting my web page!</p>
                        </div>
                    </Column>
                </Row>
            </Jumbotron>
        </div >
    )
}

export default About;