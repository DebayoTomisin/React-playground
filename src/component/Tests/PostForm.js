import React, { Component } from 'react'

class PostForm extends Component {

    constructor(props){
        super(props)
        this.state ={
            title: '',
            body : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        
        const posts = {
            title : this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label>
                        <input type="text" value={this.state.title} name="title" onChange={this.handleChange}/>
                        <br/>
                    </div>
                    <div>
                        <label>Body: </label> <br/>
                        <textarea value={this.state.body} name="body" onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
