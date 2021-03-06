import React, { useContext } from "react"

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },

    dark : {
        foreground: "#ffffff",
        background: "#222222"
    }
}

const ThemeContext = React.createContext(themes.dark)

function App(){
    return(
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

function Toolbar(props){
    return(
        <ThemedButton/>
    )
}

function ThemedButton(){
    const theme = useContext(ThemeContext)
    return(
        <button style={{background:theme.background, color: theme.foreground}}>
            I am the styled component
        </button>
    )
}

export default App