import { GET_TODO } from './types'

const fetchTodo = () => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos =>  dispatch({
            type: GET_TODO,
            payload: todos
        }))

}

export default fetchTodo
