import React from "react";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Column from "../components/Column";

function About() {
    return (
        <div>
            <Jumbotron>
                <Row>
                    <Column size="md-12">
                        <div className="text">
                            <p>Please, contact me at iwide2019@gmail.com and I will reply you right away.
                    Looking forward to hearing from you. Thank you for visiting my web page!</p>
                        </div>

                    </Column>
                </Row>

            </Jumbotron>

        </div>
    )
}

export default About;