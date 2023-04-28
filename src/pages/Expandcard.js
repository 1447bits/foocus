import React from "react";
import { useLocation } from 'react-router-dom';


export default function Expandcard(props) {

    const location = useLocation()
    const { title } = location.state

    return <div id="ExpandedCard">
        <h1>{title}</h1>
        {/* <h1>title</h1> */}
    </div>
}