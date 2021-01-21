import React, { useContext } from "react"

const themes = {
    light : {
        foreground : "#00000",
        background : "#eeeee",
    },
    dark : {
        foreground: "#fffff",
        background: "#22222"
    }
};

const ThemeContext = React.createContext(themes.light)

function App () {
    return(
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

function Toolbar(props){
    return(
        <div>
            <ThemedButton/>
        </div>
    )
}

function ThemedButton(){
    const theme = useContext(ThemeContext)
    return (
        <button style={{background: theme.background, color:theme.foreground}}>
            I am styled by theme context
        </button>
    )
}

export default App
