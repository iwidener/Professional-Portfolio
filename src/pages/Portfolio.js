import React from "react";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Column from "../components/Column";
import Card from "../components/Card";

function About() {
    return (
        <div>
            <Jumbotron>
                <Row>
                    <div>
                        <Column size="md-4">
                            <Card />
                        </Column>
                    </div>
                </Row>
            </Jumbotron>
        </div>

    );
}

export default About;