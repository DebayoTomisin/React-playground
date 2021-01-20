import React, { Component } from 'react'

const ThemeContext = React.createContext('light') // so we create the context object and pass it with a default value

export const Context = () => {
    return(
        <div>
            <ThemeContext.Provider value="dark"> 
                <Toolbar/>
            </ThemeContext.Provider>
        </div>
    )
}

export const Toolbar = () => {
    return(
        <div>
            <ThemedButton/> 
        </div>
    )
}

export class ThemedButton extends Component {
    static contextType = ThemeContext
    render(){
        return(
            <button theme={this.context}></button>
        )
    }
}


/* context provides a way to pass data through the component tree without having to pass props down manually at every level. Use a Provider to pass the current theme to the tree below. Any component can read it, no matter how deep it is. In this example, we're passing "dark" as the current value.
*/
