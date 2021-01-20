import React, { useState } from "react"

const Test = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    return(
        <form>
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="FirstName"/>
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="LastName"/>
        </form>
    )
}

export default Test


/* useContext: accepts a context object and returnsthe current context value for that context */