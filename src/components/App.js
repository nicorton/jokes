import React from 'react'

import Jokes from './Jokes'
import jokesData from '../jokesData'

export default function App(){
    const jokeElements = jokesData.map(joke => {
        return <Jokes
            setup={joke.setup}
            punchline={joke.punchline}
        />
    })

    return jokeElements
}