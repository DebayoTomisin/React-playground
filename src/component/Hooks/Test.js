import React, { useState } from "react"

const Test = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    return(
        <>
            <h1>Suzanna</h1>
        </>
    )
}

export default Test


/* useContext: accepts a context object and returnsthe current context value for that context */