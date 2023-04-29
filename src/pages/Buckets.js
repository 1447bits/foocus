import "../styles/bucket.css"
import React, { useState } from 'react';
import { Link, json } from "react-router-dom";
import crossicon from "../icons/cross-icon.png"


function Card(props) {
    return <Link to={"/expendBucket"} state={{ title: props.cardTitle }} >
        <div className='card' id={props.id}>
            <h1 className='card-title'>{props.cardTitle}</h1>
            <span className='card-totalLog'>
                <p className="card-totaltime">{props.totalLog.join(" : ")}</p>
                <p>Total time spent</p>
            </span>
            <span className='card-prevLogs'>
                <p>Previous logs</p>
                {props.latestLogs.map((log) => {
                    return <p>{log.join(" : ")}</p>
                })}
            </span>
            <p>More...</p>
        </div>
    </Link>
}



function BucketPage(props) {

    // render previous cards from local storage
    let prevcards = JSON.parse(localStorage.getItem("buckets"))
    let restoreCards = []
    
    prevcards.map((bucket) => {

        let thisBucketlatestLogs = [] 
        for(let i = 0; i < 2; i++) {
            thisBucketlatestLogs.push(bucket.alllogs[i])
        }

        restoreCards.push(<Card
            cardTitle={bucket.title}
            totalLog={bucket.totalLog}
            latestLogs={thisBucketlatestLogs}
            id={bucket.id}
        />)
    })

    // states for visibility of bucket card form
    const [Allcards, setcard] = useState(restoreCards)
    const [visibility, setvisibility] = useState(false)

    // cancel form function which simply maked the from container display none
    const cancelFrom = () => {
        document.getElementById("newbucket-title").style.border = "solid 1px #B3B3B3"
        document.getElementById("newbucket-title").value = "";
        setvisibility(false)
    }

    // new card function add new card to all cards array which is handeled usign usestate hook
    const newCard = () => {

        let card_title = document.getElementById("newbucket-title").value
        document.getElementById("newbucket-title").style.border = "solid 1px #B3B3B3"

        let cardId = parseInt(localStorage.getItem("totalBuckets")) + 1

        if (card_title !== "") {

            setcard(Allcards.concat(<Card
                cardTitle={card_title}
                totalLog={[0, 0, 0]}
                latestLogs={[[0, 0, 0], [0, 0, 0]]}
                id={cardId}
            />))
            setvisibility(false)
        } else {
            // display red border to card title inp if card title is not given
            document.getElementById("newbucket-title").style.border = "2px solid red"
            document.getElementById("newbucket-title").addEventListener("input", (e) => {
                e.target.style.border = "solid 1px #B3B3B3"
            })
            return
        }

        // create object of new card created
        let cardObj = {
            title: card_title,
            totalLog: [0, 0, 0],
            alllogs: [[0, 0, 0], [0, 0, 0]],
            id: cardId
        }

        // store new card to local storage
        let buckets = JSON.parse(localStorage.getItem("buckets"))
        buckets.push(cardObj)
        localStorage.setItem("buckets", JSON.stringify(buckets))
        localStorage.setItem("totalBuckets", cardId)

        // finally close form
        cancelFrom()
    }

    const displayNewCardFrom = () => {
        setvisibility(!visibility)
    }

    return (
        <div id="Bucket-page">
            <div
                id="newBucket-form-container"
                style={{
                    display: visibility ? "flex" : "none",
                    position: "fixed",
                    justifyContent: "center",
                    minHeight: "100vh",
                    width: "100vw",
                    top: "0",
                    left: "0",
                    overflowX: "hidden",
                    overflowY: "auto",
                    zIndex: "3",
                    background: "rgba(108, 108, 108, 0.22)",
                    backdropFilter: "blur(3.5px)",
                }}>
                <div id="newBucket-form">
                    <div id="newBucket-form-topbar">
                        <h1>Create a New Bucket</h1>
                        <img
                            src={crossicon}
                            alt="cancel-icon"
                            onClick={() => cancelFrom()}
                        />
                    </div>
                    <div id="newBucket-formflelds">
                        <label>
                            <p>Bucket Title</p>
                            <input type="text"
                                id="newbucket-title" />
                        </label>
                        <label  >
                            Rewoke Time
                            <input type="text"
                                id="newbucket-rewoketime" />
                        </label>
                        <label  >
                            Daily Limit
                            <input type="text"
                                id="newbucket-dailylimit" />
                        </label>
                    </div>
                    <div id="newBucket-formbtns">
                        <button
                            id="cancelbtn"
                            onClick={() => cancelFrom()}
                        >
                            Cancel
                        </button>
                        <button
                            id="submitbtn"
                            onClick={() => newCard()}
                            formAction="submit"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
            <div id="bucket-container">

                <div id='AdditionCard'>
                    <button onClick={() => displayNewCardFrom()}>+ New</button>
                </div>

                {Allcards}

            </div>
        </div>
    );
}

export default BucketPage;