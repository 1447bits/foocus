import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "../styles/expandedPage.css"
import backicon from "../icons/backIcon.png"
import pauseIcon from "../icons/pauseIcon.png" 
import fill_pauseIcon from "../icons/playIconFilled.png" 
import playIcon from "../icons/playIcon.png" 

export default function Expandcard(props) {

    const location = useLocation()
    const { title } = location.state
    let totalLog = [310, 23, 11]
    let latestLogs = [[1, 23, 33], [2, 23, 56]]

    return <div id="ExpandedCard-container">
        <div id="ExpandedCard">
            <Link to="../Buckets" ><img src={backicon} alt="back" /></Link>
            <div className="card-content" >
                <div className="card-info">
                    <h1>{title}</h1>
                    <div className="total-time">
                        <p className="card-totaltime">{totalLog.join(" : ")}</p>
                        <p>Total time spent</p>
                    </div>
                    <div className="card-controls">
                        <button>
                            <img src={pauseIcon} />
                        </button>
                        <button>
                            <img src={playIcon} />
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