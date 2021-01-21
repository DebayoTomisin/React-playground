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

The context api has some methods that define its operations
1. createContext creates a context object, when a component subscribes to the context object it will read the context value from the nearest matching provider above it in the tree as we see Toolbar do in the above example.
2. Context.Provider: every context object comes with a provider component that allows consuming components to subscribe to context changes. It accepts a value prop
3. Class.contextType: is usually attached as a property to a class, this lets you consume the nearest current value of that contextType using this.context
4.Context.consumer: this is a react component that subscribes to context changes, lets you subscribe to a context within a functional component. requires a function as a child
5. context.displayName: Context object accepts a displayName string property. React DevTools uses this string to determine what to display for the context. this is basically just giving a name to the context object
*/
