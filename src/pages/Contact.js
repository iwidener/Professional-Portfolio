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
                        <div className="contact-message">Please, contact me at iwide2019@gmail.com and I will reply you right away. I'm looking forward to hearing from you. Thank you for visiting my web page!
                        </div>

                    </Column>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default About;