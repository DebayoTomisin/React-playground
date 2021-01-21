import React from "react"

export const themes = {
    light: {
        forground: "#00000",
        background: "#eeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222",
    },
}

export const ThemeContext = React.createContext(themes.dark) //themes.dark is set as the default value
