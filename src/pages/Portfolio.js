import React from "react";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import Card from "../components/Card";

let val;
val = window.scrollY;
console.log(val);

function About() {
    return (
        <div>
            <Jumbotron>
                <Row>
                    <Card />
                </Row>
            </Jumbotron>
        </div>
    );
}

export default About;