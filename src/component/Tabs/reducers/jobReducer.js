import { FETCH_JOBS, FETCH_COMPANY, LOADING } from '../actions/types'

const initialState = {
    jobs : {},
    loading : false
}

function jobReducer (state=initialState, action) {
    switch(action.type){
        case FETCH_JOBS:
            return{
                ...state,
                jobs: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default jobReducer
