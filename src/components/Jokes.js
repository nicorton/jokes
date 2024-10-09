import React from 'react'

export default function Jokes(props){ 
    return(
        <div className="joke">
            {props.setup && <h3 className="setup">Set-up: {props.setup}</h3>}
            <p className="punchline">Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}