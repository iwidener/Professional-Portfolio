import React from "react";
import img1 from "./img1.png";
import "./style.css";

function Card(props) {
    return (

        <div className="card">
            <img src={img1} alt="visual-presentation1" className="card-img-top" />

            <div className="card-body text-dark">
                <h6 className="title">Burger</h6>
                <p className="card-text text-secondary">
                    An app for the restaurants so that the users can easily input the names of burgers and devour them. </p>
                <a href="https://github.com/iwidener/Burger" className="btn btn-success">GitHub Repo</a>
                <a href="https://floating-eyrie-38357.herokuapp.com/" className="btn btn-success">Deployed Link</a>
            </div>
        </div>
    );
}

export default Card;