import React, { useState, useReducer, useRef } from "react"

export const Test = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    return(
        <>
            <h1>Suzanna</h1>
        </>
    )
}

const initialState = {count : 0}

function reducer(action, state){
    switch (action.type) {
        case "increase":
            return {count: state.count + 1}
        case "decrease":
            return{count: state.count - 1}
        default:
            throw new Error()
    }
}

export function ReducedCounter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: "increase"})}>increase button</button>
            <button onClick={() => dispatch({type: "decrease"})}>decrease button</button>
        </>
    )
}

// useRef example

function FocusBox(){
    const inputEl = useRef(null)
    const clickButton = () => {
        inputEl.current.focus()
    }
    return(
        <div>
            <input ref={inputEl} type="text"/>
            <button onClick={clickButton}>Click me</button>
        </div>
    )
}

/* useContext: accepts a context object and returnsthe current context value for that context */