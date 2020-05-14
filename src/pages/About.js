import React from "react";
import Row from "../components/Row";
import Column from "../components/Column";
import Jumbotron from "../components/Jumbotron";

function About() {
    return (
        <div>
            <Jumbotron>
                <Row>
                    <Column size="md-12">

                        <p>
                            My dream is to become a Full Stack Web Developer.</p>
                        <p>
                            I have a significant experience in Linguistics and
                            Educational fields. Worked as a translator/interpreter in the watch company, translated into English two
                            documentaries on a volunteer basis, have a professional experience as a substitute teacher in the international and public schools.</p>


                        <p>
                            Compelled to succeed in the technological world and to embrace the new computer languages. Excited to
                            write the code, develop responsive websites as well as deliver outstanding and functional web experiences.</p>

                        <p>
                            I am currently earning a certificate in Web Development through Southern Methodist University while
                            expanding skills in HTML, CSS, Javascript, jQuery, Express.js, Node.js, MySQL, MongoDB, React, and MERN. Positioned to
                            contribute to teamwork with a personal
                            passion for the details, critical thinking and excellent communication skills. Disciplined to do work
                            with minimum supervision.</p>

                        <p>
                            I like to learn the languages and now I want to excel in techno linguistics.</p>
                        {/* <div class="clearfix"></div> */}
                    </Column>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default About;