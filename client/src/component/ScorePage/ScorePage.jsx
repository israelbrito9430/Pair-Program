import React from 'react'


function ScorePage({score}) {
    return (
        <div className="scorrePage">
            <h1 className="score__card">Your score was {score} </h1>
        </div>
    )
}

export default ScorePage
