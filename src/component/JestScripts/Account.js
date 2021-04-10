import React from 'react'

const style = {
    width: "15rem",
    margin: "2rem 0rem 0rem 15rem",
};

const Account = ({ user }) => { 

    const {name, email} = user   

    return(
        <>
            <div key={name} style={style}>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </>
    )
}

export default Account
