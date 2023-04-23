import React, { useState } from "react";
import "../styles/nav.css"
import navIcon from "../icons/focus-icon.png"
import navHome from "../icons/nav-home.png"
import navInfo from "../icons/nav-info.png"
import navGithub from "../icons/nav-github.png"
import navBucket from "../icons/nav-bucket.png"

import { motion } from "framer-motion";


export function Nav() {

    const [page, setpage] = useState("home")
    const [currpage, setcurrpage] = useState("home")

    const navIconStyles = {
        height: "50px",
        minWidth: "50px",
        background: "#cccee5",
        borderRadius: "25px",
        fontWeight: "bold",
        fontSize: "1.1em",
        display: "flex",
        justifyContent: "left",
        overflow: "hidden",
        gap: "1em",
        alignItems: "center",
        cursor: "pointer",
        paddingInline: "10px",
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
        <div id="nav-icons" style={{ display: "flex", marginLeft: "calc((50vw - (200px + (1em * 5)))", gap: "1em" }}>
            <motion.div className="nav-icon"
                onMouseEnter={() => {
                    setpage("home")
                }}
                onMouseLeave={() => {
                    setpage(currpage)
                }}
                animate={{
                    width: page === "home" || currpage === "home" ? "fit-content" : "50px",
                }}
                style={navIconStyles}>
                <img src={navHome} alt="icon" />
                <p>Home</p>
            </motion.div>
            <motion.div className="nav-icon"
                onMouseEnter={() => {
                    setpage("buckets")
                }}
                onMouseLeave={() => {
                    setpage(currpage)
                }}
                animate={{
                    width: page === "buckets" || currpage === "buckets" ? "fit-content" : "50px",
                }}
                style={navIconStyles} >
                <img src={navBucket} alt="icon" />
                <p>Buckets</p>
            </motion.div>
            <motion.div className="nav-icon"
                onMouseEnter={() => {
                    setpage("info")
                }}
                onMouseLeave={() => {
                    setpage(currpage)
                }}
                animate={{
                    width: page === "info" || currpage === "info" ? "fit-content" : "50px",
                }}
                style={navIconStyles} >
                <img src={navInfo} alt="icon" />
                <p>Info</p>
            </motion.div>
            <motion.div className="nav-icon"
                onMouseEnter={() => {
                    setpage("contribute")
                }}
                onMouseLeave={() => {
                    setpage(currpage)
                }}
                animate={{
                    width: page === "contribute" || currpage === "contribute" ? "fit-content" : "50px",
                }}
                style={navIconStyles} >
                <img src={navGithub} alt="icon" />
                <p>Contribute</p>
            </motion.div>
        </div>
    </div>
}
