import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { fetchPosts } from "./actions/postActions"

function Posts(props){

    useEffect(() => {
        props.fetchPosts()
    }, [])

    const postMap = props.posts.map((postItem) => (
        <div key={postItem.id}>
            <h2>{postItem.title}</h2>
            <p>{postItem.body}</p>
            <br/>
        </div>
    ))

    return(
        <div>
            <h2>Posts</h2>
            {postMap}
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts.items,
})

export default connect (mapStateToProps, { fetchPosts })(Posts)
