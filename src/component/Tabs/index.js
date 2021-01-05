import { useEffect, useState } from 'react'
import  { connect } from "react-redux"
import './index.css'
import PropTypes from 'prop-types'

import { fetchJobs, Loading } from './actions/jobAction'

function Tabs (props){

    const [value, setValue] = useState(0)
    
    useEffect(() => {
        props.Loading()
        props.fetchJobs()
    })

    if(props.loading){
        return(
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        )
    }

    const {company, title, dates, duties} = props.jobs[value]
    return(
        <section className="section">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>

            <div className="jobs-center">
                <div className="btn-container">
                    {props.jobs.map((job, index) => {
                        return(
                            <button key={job.id} className={`job-btn ${index === value && `active-btn`}`} onClick={() => setValue(index)}>{job}</button>
                        )
                    })}
                </div>
                <article className="job-info">
                    <h3>{}</h3>
                </article>
            </div>
        </section>       
    )
}

const mapStatetoProps =  state => ({
    jobs: state.jobs.jobs,
    loading : state.loading.loading
})

export default connect (mapStatetoProps, { fetchJobs, Loading })(Tabs)
