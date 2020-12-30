import { FETCH_POSTS, NEW_POST, LOADING } from './types'

const fecthPosts = () => dispatch => {
    console.log('fetching...')
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type:FETCH_POSTS,
                payload: posts
            })
        );
    
}

export const createPost = postData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => 
            dispatch({
                type: NEW_POST,
                payload: data
            })
        );
};


export default fecthPosts
