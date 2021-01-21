import React from 'react'
import Basics from './Basics'
import { Context } from './Context'
import Test from './Test'
import App from './useContext'
import Themes from './Themes'

function Hooks (){
    return(
        <div>
            <h4>Bigger everyday!</h4>
            <Test/>
            <Context />
            <Themes/>
            <App/>
        </div>
    )
}

export default Hooks

// Hooks  are functions that let you "hook" into react state and lifecycle methods from function components
/* cleaning up after the useEffect basically means returning a function to clean up after the computation done in the main function body an example is the useEffect i use when using setTimeout to clear the timeout after it has been rendered*/