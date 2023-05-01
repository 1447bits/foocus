import React from "react";
import "../styles/Home.css"
import { Link } from "react-router-dom";

const No_Bucket_Preview = (props2) => {
    return <Link to={"/buckets"}>
        <div id="No_Bucket_Preview">
            <h1>+ Add Some cards</h1>
        </div>
    </Link>
}

function Bucket_Preview(props) {

    return <div className="home-bucket">
        <div className="home-bucket-heading">
            <div className="home-latestcards-heading-neighbours" ></div>
            <h1>
                {props.title}
            </h1>
            <div className="home-latestcards-heading-neighbours" ></div>
        </div>
        <div className="home-its-been">
            <span>Its Been, </span>
            <span>{props.total.join(" : ")}</span>
        </div>
        <div className="logs">
            <h1>Logs</h1>
            <div className="log home-log">
                {props.prevlogs[0][0].join(" / ")} {props.prevlogs[0][1]} : {props.prevlogs[0][2]}
            </div>
            <div className="log home-log">
                {props.prevlogs[1][0].join(" / ")} {props.prevlogs[1][1]} : {props.prevlogs[1][2]}
            </div>
        </div>
    </div>
}

export default function Home(props) {
    return <div id="Home">
        <h1>Latest Logs</h1>
        <div id="home-logs">
            <No_Bucket_Preview />
            <Bucket_Preview
                title="New Card"
                total={[10, 0, 0]}
                prevlogs={[[["12", "06", "12"], "( Monday )", "Note"], [["13", "06", "12"], "( tuesday )", "Note 2"]]}
            />
        </div>
    </div>
}