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


export default fecthPosts
