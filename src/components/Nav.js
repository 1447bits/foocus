import React from "react";
// import styles from "../styles/nav.css"
import navIcon from "../icons/focus-icon.png"
import navHome from "../icons/nav-home.png"
import navInfo from "../icons/nav-info.png"
import navGithub from "../icons/nav-github.png"
import navBucket from "../icons/nav-bucket.png"

export class Nav extends React.Component {

    render() {
        const navIconStyles = {
            width : "50px",
            height : "50px",
            background : "#D6D8FA",
            borderRadius : "50%",
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            cursor : "pointer"
        }
        
        return <div id="nav-bar" style={{padding: "0.5em", display: "flex"}}>
            <span id="nav-logo" style={{display : "flex", gap : "0.5em", alignItems:"center"}}>
                <img src={navIcon} style={{width : "2em"}} />
                <h1 style={{ fontSize : "1.7em", color : "#202227", textShadow : "-4px -2px 1px rgba(32, 34, 39, 0.49)" }}>
                    FOOCUS
                </h1>
            </span>
            <span id="nav-icons" style={{ display: "flex", marginInline: "auto", gap: "1em" }}>
                <span className="nav-icon" style={navIconStyles} >
                    <img src={navHome} />
                </span>
                <span className="nav-icon" style={navIconStyles} >
                    <img src={navBucket} />
                </span>
                <span className="nav-icon" style={navIconStyles} >
                    <img src={navInfo} />
                </span>
                <span className="nav-icon" style={navIconStyles} >
                    <img src={navGithub} />
                </span>
            </span>
        </div>
    }
}