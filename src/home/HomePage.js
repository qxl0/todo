import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => (
    <div className="jumbotron">
        <h1>Qiang's React Site</h1>
        <p>Learning React, Redux, Bootstrap, and all front end skills</p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn More
        </Link>
    </div>
);

export default HomePage;