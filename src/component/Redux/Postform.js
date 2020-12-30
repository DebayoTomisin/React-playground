import { Component, useEffect } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { createPost } from './actions/postAction'

class Postform extends Component{
    constructor(props){
        super(props)
        this.state ={
            title : '',
            body: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body
        }
        
        this.props.createPost(post)
    }

    render(){
        
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br/>
                        <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label>Body: </label><br/>
                        <textarea name="body" onChange={this.handleChange} value={this.state.body}/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes= {
    createPost:PropTypes.func.isRequired
}

export default connect(null, { createPost } )(Postform)
