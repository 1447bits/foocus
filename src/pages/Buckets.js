import "../styles/bucket.css"
import React, { useState } from 'react';


function Card(props) {
    return <div className='card'>
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
}



function BucketPage(props) {

    const [Allcards, setcard] = useState([])

    const newCard = () => {
        setcard(Allcards.concat(<Card
            cardTitle="card title"
            totalLog={[310, 113, 256]}
            latestLogs={[[1, 23, 6], [2, 56, 23]]}
        />))
    }

    return (
        <div id="Bucket-page">
            <div id="card-container">

                <div id='AdditionCard'>
                    <button onClick={() => newCard()}>+ New</button>
                </div>

                {Allcards}

            </div>
        </div>
    );
}

export default BucketPage;