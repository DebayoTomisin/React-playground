import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import fetchTodo  from "./action/action"


function RTodo(props){
    
    useEffect(() => {
        
        props.fetchTodo()
    }, [])

    const todoMap = props.todos.map((item) => (
        <div key={item.id}>
            <h2>{item.title}</h2>
            <br/>
        </div>
    ))

    return(
        <div>
            <h2>Woske!</h2>
            <br/>
            {todoMap}
        </div>
    )
}
const mapStateToProps = state => ({
    todos : state.todo.todos
})

export default connect (mapStateToProps, { fetchTodo })(RTodo)
