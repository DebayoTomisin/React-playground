import { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import  { connect } from "react-redux"
import './index.css'


import { fetchJobs } from './actions/jobAction'

function Tabs (props){

    const [value, setValue] = useState(0)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(false)
        props.fetchJobs()
    }, [])

    if(loading){
        return(
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        )
    }

    const {title, dates, company, duties} = props.jobs[value]
    console.log(props.jobs[value])
    console.log(props.jobs[value].id)
    console.log(value)

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
                            <button key={job.id} onClick={() => {setValue(index)}}  className={`job-btn ${index === value && `active-btn`}`}>{job.company}</button>
                        )
                    })}
                </div>
                
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty, index) => {
                        return(
                            <div className="job-desc" key={index}>
                                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                <p>{duty}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
        </section>
    )
  
}

const mapStatetoProps =  state => ({
    jobs: state.jobs.jobs,
})

export default connect (mapStatetoProps, { fetchJobs })(Tabs)
