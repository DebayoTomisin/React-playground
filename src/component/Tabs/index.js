import { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import  { connect } from "react-redux"
import './index.css'
import PropTypes from 'prop-types'

import { fetchJobs } from './actions/jobAction'

function Tabs (props){

    const [value, setValue] = useState(0)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(false)
        props.fetchJobs()
    })

    if(loading){
        return(
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        )
    }

    return(
        <section className="section">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    
                </div>
                
            </div>
        </section>
    )
  
}

const mapStatetoProps =  state => ({
    jobs: state.jobs.jobs,
})

export default connect (mapStatetoProps, { fetchJobs })(Tabs)
