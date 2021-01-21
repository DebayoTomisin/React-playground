import React, { Component } from "react"

import { ThemeContext } from "./ThemeContext"

class ThemeButton extends Component {
    constructor(props){
        super(props)
        this.state = { }
    }
    render(){
        let theme = this.context
        return(
            <button {...this.props} style={{background: theme.background}}/>
        )
    }
}

ThemeButton.contextType = ThemeContext

export default ThemeButton