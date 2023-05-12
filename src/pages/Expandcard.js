import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "../styles/expandedPage.css"
import backicon from "../icons/backIcon.png"
import pauseIcon from "../icons/pauseIcon.png"
import playIcon from "../icons/playIcon.png"
import stopIcon from "../icons/stopIcon.png"
// import { getFID } from "web-vitals";

export default function Expandcard(props) {

    // get title from url using useLocation hook 
    const location = useLocation()
    const { id } = location.state

    // card storage structure
    // array of card objects each object dedicated to a unique card of an unique id
    // id-1 means index of array starts with zero (0) and id starts with one (1)
    let ThisCard = JSON.parse(localStorage.getItem("card-buckets"))[id - 1]
    console.log(ThisCard)


    let totalLog = ThisCard.totalLog
    let latestLogs = []
    for (let i = 0; i < 2; i++) {
        latestLogs.push(ThisCard.alllogs[i])
    }

    // state to store time
    const [time, setTime] = useState(0);

    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            // setting time from 0 to 60 every 60sec 
            intervalId = setInterval(() => setTime(time + 1), 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    // Hours calculation
    const hours = Math.floor(time / 3600);

    // Minutes calculation
    const minutes = Math.floor((time % 3600) / 60);

    // Seconds calculation
    const seconds = Math.floor(time);

    // Method to start and stop timer
    const startAndStop = () => {
        setIsRunning(!isRunning);
    };

    // Method to reset timer back to 0
    const reset = () => {
        let logtime = [hours, minutes, seconds]
        console.log(logtime)
        setTime(0);
    };

    return <div id="ExpandedCard-container">
        <div id="ExpandedCard">
            <Link to="../Buckets" ><img src={backicon} alt="back" /></Link>
            <div className="card-content" >
                <div className="card-info">
                    <h1>{ThisCard.title}</h1>
                    <div className="total-time">
                        <p className="card-totaltime">{totalLog.join(" : ")}</p>
                        <p>Total time spent</p>
                    </div>
                    <div id="expandedcard-timer">
                        {/* padstart fills the value "0" for string length 2  */}
                        {hours.toString().padStart(2, "0")}:
                        {minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}
                    </div>
                    <div className="card-controls">
                        <button id="play-pause-btn" onClick={() => startAndStop()}>
                            <img src={isRunning ? pauseIcon : playIcon} alt="" />
                        </button>
                        <button id="stop-btn" onClick={() => reset()} >
                            <img src={stopIcon} alt="" />
                        </button>
                    </div>
                    <div className="card-previousLogs">
                        <p>Previous logs</p>
                        {latestLogs.map((log) => {
                            return <p>{log.join(" : ")}</p>
                        })}
                    </div>
                </div>
                <div className="card-logs">
                    <h1>Logs</h1>
                    <div id="Alllogs" >
                        <div className="log">12/03/2023 (Monday)  : Note of the work</div>
                        <div className="log">12/03/2023 (Monday)  : Note of the work</div>
                        {/* <div className="log">{date} ({day})  : {note}</div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
}