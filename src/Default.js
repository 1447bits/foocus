import React from "react";
import { Nav } from "./components/Nav";
import { useLocation } from "react-router-dom";


export default function Default(props) {

    return <>
        <Nav />
        {props.children}
    </>
}
