import React from 'react'
import Basics from './Basics'
import { Context } from './Context'
import Test from './Test'
import App from './useContext'
import Themes from './Themes'
import {ThemedApp} from "./Context"
import { Counter, TextwithInputFocusButton } from "./Rest"

function Hooks (){
    return(
        <div>
            <App/>
            <br/>
            <ThemedApp/>
            <br/>
            <Counter/>
            <br/>
            <TextwithInputFocusButton/>
        </div>
    )
}

export default Hooks

// Hooks  are functions that let you "hook" into react state and lifecycle methods from function components
/* cleaning up after the useEffect basically means returning a function to clean up after the computation done in the main function body an example is the useEffect i use when using setTimeout to clear the timeout after it has been rendered*/