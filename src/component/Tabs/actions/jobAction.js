import { FETCH_JOBS, FETCH_COMPANY, LOADING } from '../actions/types'

const url = 'https://course-api.com/react-tabs-project'

export const fetchJobs = () => async (dispatch) => {

    try {
        const response = await fetch (url)
        const jobs = await response.json()
        dispatch({
            type: FETCH_JOBS,
            payload: jobs
        })
    }
    catch(error){
        console.log('Throwing :', error)
        throw(error)
    }
    
}