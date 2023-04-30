import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Website_icon from "../icons/focus-icon.png"
import navHome from "../icons/nav-home.png"
import navInfo from "../icons/nav-info.png"
import navGithub from "../icons/nav-github.png"
import navBucket from "../icons/nav-bucket.png"

import { motion } from "framer-motion";


export function Nav(props) {

    const location = useLocation()

    const [page, setpage] = useState(location.pathname)
    const [currpage, setcurrpage] = useState(location.pathname)
    // const [page, setpage] = useState(localStorage.getItem("page"))
    // const [currpage, setcurrpage] = useState(localStorage.getItem("page"))

    const navIconStyles = {
        height: "50px",
        minWidth: "50px",
        background: "#cccee5",
        borderRadius: "25px",
        fontWeight: "bold",
        fontSize: "1.3em",
        display: "flex",
        overflow: "hidden",
        gap: "0.5em",
        alignItems: "center",
        cursor: "pointer",
        paddingInline: "10px",
    }

    return <div id="nav-bar" style={{ padding: "0.5em", display: "flex", overflow: "hidden" }}>
        <Link to="/" >
            <div id="nav-logo" style={{ display: "flex", gap: "0.5em", alignItems: "center" }}>
                <img src={Website_icon} style={{ width: "2em" }} alt="icon" />
                <h1 style={{
                    fontSize: "1.7em",
                    color: "#202227",
                    textShadow: "-4px -2px 1px rgba(32, 34, 39, 0.49)"
                }}>
                    FOOCUS
                </h1>
            </div>
        </Link>
        <div id="nav-icons" style={{ display: "flex", marginLeft: "calc((50vw - (200px + (1em * 5)))", gap: "1em" }}>
            {/* <Link to="/" onClick={() => setcurrpage("/")}> */}
            <Link to="/" onClick={() => {
                setcurrpage("/")
                localStorage.setItem("page", "/")
            }}>
                <motion.div className="nav-icon"
                    onMouseEnter={() => {
                        setpage("/")
                    }}
                    onMouseLeave={() => {
                        setpage(currpage)
                    }}
                    animate={{
                        width: page === "/" || currpage === "/" ? "fit-content" : "50px",
                    }}
                    style={navIconStyles}>
                    <img src={navHome} alt="icon" />
                    <p>Home</p>
                </motion.div>
            </Link>
            <Link to="/buckets" onClick={() => {
                setcurrpage("/buckets")
                localStorage.setItem("page", "/buckets")
            }}>
                {/* <Link to="/buckets" onClick={() => showPath()}> */}
                <motion.div className="nav-icon"
                    onMouseEnter={() => {
                        setpage("/buckets")
                    }}
                    onMouseLeave={() => {
                        setpage(currpage)
                    }}
                    animate={{
                        width: page === "/buckets" || currpage === "/buckets" ? "fit-content" : "50px",
                    }}
                    style={navIconStyles} >
                    <img src={navBucket} alt="icon" />
                    <p>Buckets</p>
                </motion.div>
            </Link>
            <Link to={"/info"} onClick={() => {
                setcurrpage("/info")
                localStorage.setItem("page", "/info")
            }}>
                {/* <Link to={"/info"} onClick={()=>showPath()}> */}
                <motion.div className="nav-icon"
                    onMouseEnter={() => {
                        setpage("/info")
                    }}
                    onMouseLeave={() => {
                        setpage(currpage)
                    }}
                    animate={{
                        width: page === "/info" || currpage === "/info" ? "fit-content" : "50px",
                    }}
                    style={navIconStyles} >
                    <img src={navInfo} alt="icon" />
                    <p>Info</p>
                </motion.div>
            </Link>
            <Link to={"https://github.com/Mr-okey/foocus"} >
                <motion.div className="nav-icon"
                    onMouseEnter={() => {
                        setpage("Contribute")
                    }}
                    onMouseLeave={() => {
                        setpage(currpage)
                    }}
                    animate={{
                        width: page === "Contribute" || currpage === "Contribute" ? "fit-content" : "50px",
                    }}
                    style={navIconStyles} >
                    <img src={navGithub} alt="icon" />
                    <p>Contribute</p>
                </motion.div>
            </Link>
        </div>
    </div>
}
