import React, { useState, useEffect } from "react"

function Posts(){
    
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        const fetchPosts = async () => {
            setLoading(true)
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
            const data = await res.json()

            setLoading(false)
            setPosts(data)
        }

        fetchPosts()
    }, [])

    const postItems = posts.map(post => (
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

export default Posts
