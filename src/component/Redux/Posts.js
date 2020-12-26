import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import fetchPosts  from './actions/postAction'

function Posts(props){
    
 
    const [loading, setLoading] = useState(false)
    
    
    useEffect(() => {
        
        const fetchPosts = async () => {
            setLoading(true)
            props.fetchPosts()
        
            setLoading(false)  
        }

        fetchPosts()
    }, [])

    const postItems = props.posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <br/>
        </div>
    ))

    return(
        <div>
            <h1>Posts</h1>
            {!loading ? postItems : <h1>Loading...</h1>}         
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
