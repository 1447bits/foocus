import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "../styles/expandedPage.css"
import backicon from "../icons/backIcon.png"
import pauseIcon from "../icons/pauseIcon.png"
import fill_pauseIcon from "../icons/playIconFilled.png"
import playIcon from "../icons/playIcon.png"

export default function Expandcard(props) {

    const [play, setPlay] = useState(false)

    // get title from url using useLocation hook 
    const location = useLocation()
    const { id } = location.state

    // card storage structure
    // array of card objects each object dedicated to a unique card of an unique id
    // id-1 means index of array starts with zero (0) and id starts with one (1)
    let ThisCard = JSON.parse(localStorage.getItem("card-buckets"))[id - 1]

    let totalLog = ThisCard.totalLog
    let latestLogs = ThisCard.alllogs

    const [thisTimer, settimer] = useState([0, 0, 0])

    // function playfunc() {
    //     if (play) {
    //         setreset(true)
    //     }
    //     const expandedcard_timer = document.getElementById("expandedcard-timer")
    //     console.log("play")
    //     setPlay(!play)
    //     const timerInterval = setInterval(() => {
    //         if (reset) {
    //             expandedcard_timer.innerHTML = "00 : 00 : 00"
    //             clearInterval(timerInterval)
    //         }
    //         let temptimer = thisTimer
    //         if (temptimer[2] === 60) {
    //             if (temptimer[1] === 59) {
    //                 temptimer[2] = 0
    //                 temptimer[1] = 0
    //                 temptimer[0] += 1
    //             }
    //             temptimer[2] = 0
    //             temptimer[1] += 1
    //         } else {
    //             temptimer[2] += 1
    //         }
    //         expandedcard_timer.innerHTML = temptimer.join(" : ")
    //     }, 1000)
    // }
    // function pausefunc() {
    //     const expandedcard_timer = document.getElementById("expandedcard-timer")
    //     expandedcard_timer.innerHTML = "00 : 00 : 00"
    //     console.log("pause")
    // }

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
                        00 : 00 : 00
                    </div>
                    <div className="card-controls">
                        <button id="pause-btn" >
                        {/* <button id="pause-btn" onClick={() => pausefunc()} > */}
                            <img src={pauseIcon} />
                        </button>
                        <button id="play-stop-btn">
                        {/* <button id="play-stop-btn" onClick={() => playfunc()}> */}
                            <img src={play ? playIcon : fill_pauseIcon} />
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
    </div >
}