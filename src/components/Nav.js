import React from "react";
// import styles from "../styles/nav.css"
import navIcon from "../icons/focus-icon.png"
import navHome from "../icons/nav-home.png"
import navInfo from "../icons/nav-info.png"
import navGithub from "../icons/nav-github.png"
import navBucket from "../icons/nav-bucket.png"

import { motion } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";

export class Nav extends React.Component {

    render() {
        const navIconStyles = {
            width: "50px",
            height: "50px",
            // background: "#d7d8ec",
            background: "#cccee5",
            borderRadius: "25px",
            fontWeight :"bold",
            fontSize : "1.1em",
            display: "flex",
            justifyContent: "left",
            overflow: "hidden",
            gap: "1em",
            alignItems: "center",
            cursor: "pointer",
            transition: "0.3s",
            paddingInline : "10px",
        }
        const OnHoverStyles = {
            width: 'fit-content'
        }

        return <div id="nav-bar" style={{ padding: "0.5em", display: "flex" }}>
            <div id="nav-logo" style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
                <img src={navIcon} style={{ width: "2em" }} alt="icon" />
                <h1 style={{
                    fontSize: "1.7em",
                    color: "#202227",
                    textShadow: "-4px -2px 1px rgba(32, 34, 39, 0.49)"
                }}>
                    FOOCUS
                </h1>
            </div>
            <div id="nav-icons" style={{display : "flex", marginLeft: "calc((50vw - (200px + (1em * 5)))", gap: "1em" }}>
                <motion.div className="nav-icon" style={navIconStyles} 
                // whileHover={OnHoverStyles}
                // transition={{type: "just"}}
                >
                    <img src={navHome} alt="icon" />
                    <p>Home</p>
                </motion.div>
                <motion.div className="nav-icon" style={navIconStyles} >
                    <img src={navBucket} alt="icon" />
                    <p>Home</p>
                </motion.div>
                <motion.div className="nav-icon" style={navIconStyles} >
                    <img src={navInfo} alt="icon" />
                    <p>Home</p>
                </motion.div>
                <motion.div className="nav-icon" style={navIconStyles} >
                    <img src={navGithub} alt="icon" />
                    <p>Home</p>
                </motion.div>
            </div>
        </div>
    }
}