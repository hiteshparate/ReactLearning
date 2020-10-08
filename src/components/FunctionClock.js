import React from 'react'
time : new Date().toLocaleTimeString();

function tick() {
    return <h2> Time is {new Date().toLocaleTimeString()}</h2>
}

function FunctionClock() {
    return (
        <div>
            {tick()}
            
        </div>
    )
}


export default FunctionClock
