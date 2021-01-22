import React, { useReducer, useRef } from "react"
/* This contains the remainder of the hooks and examples on how they are used */

// useReducer is an alternative to useState accepts a reducer of the current state and an action and then returns the updated state alongside a dispatch methos, basically the workings of redux, an example with a counter

const initialState = {count: 0}

const reducer = (state, action) => {
    switch(action.type){
        case "increament":
            return{count : state.count + 1}
        case "decreament":
            return {count: state.count - 1}
        default:
            throw new Error()
    }
}

export function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type:"increament"})}>increase</button>
            <button onClick={() => dispatch({type:"decreament"})}>decrease</button>
        </>
    )
}

// useMemo basically works like a cache, it takes in a funtion and its dependencies and only renders when one of the dependencies have changed. it is basically used to optimize code

//useRef is used to access DOM, returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

export function TextwithInputFocusButton(){
    const inputEl = useRef(null)
    const onButtonClick= () => {
        inputEl.current.focus()
    }
    return(
        <>
            <input type="text" ref={inputEl}/>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}

