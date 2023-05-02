import React from "react";
import "../styles/Info.css"
import githubIcon from "../icons/nav-github.png"
import FocusIcon from "../icons/focus-icon.png"
import { Link } from "react-router-dom";

export default function Info(props) {
    return <div id="Info">

        <div id="info-container">
            <span id="infopg-icon">
                <img src={FocusIcon} />
                <h1 id='info-title'>Foocus</h1>
            </span>

            <span id="info-info">
                <p>Welcome to Foocus, your personal work log tracker. We know how challenging it can be to keep track of your workday, so we designed Foocus to make it easier for you to stay organized and focused. With our simple timer feature, you can easily start and stop the clock to track your work hours. Plus, our note-taking feature allows you to add any additional details or comments about your task. Whether you're working on a project or just trying to stay on top of your daily to-do list, Foocus can help you prioritize and manage your time more efficiently. Thank you for choosing Foocus, and we're excited to help you achieve your goals!</p>
            </span>

            <Link to={"https://github.com/Mr-okey/foocus"}>
            <span id="info-Contribute-Btn">
                <img src={githubIcon} />
                Contribute
            </span>
            </Link>
        </div>

    </div>
}