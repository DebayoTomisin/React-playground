import { FETCH_JOBS, FETCH_COMPANY} from '../actions/types'

const url = 'https://course-api.com/react-tabs-project'

export const fetchJobs = () => dispatch => { //promises method
    fetch(url)
    .then(res => res.json())
    .then(data => 
        dispatch({
            type: FETCH_JOBS,
            payload: data
        }))
}


const fetchJob = async dispatch => { // async await method
    const response = await fetch(url)
    const data = response.json()
    dispatch({
        type: FETCH_JOBS,
        payload: data
    })
}

export default fetchJob
