import React, { useState, useEffect,  useCallback } from 'react'
import Account from './Account'

const AccountFetch = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [ users, setUsers] = useState([])

    const fetchUsers = useCallback( async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const data = await response.json()
            setUsers(data)
            setLoading(false)
            //console.log(users)
            
        } 
        catch (error) {
            setError(error)
            setLoading(false)
        }
        setLoading(false)
    }, [users])
 
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers,])

    return(
        <>
            <h1>Display Active Users Account Details</h1>
            {error ? <p>{error.message}</p> : null}
            {!loading ? (
            users.map((user) => {
                return <Account key={user.username} user={user} />;
            })
            ) : 
            (
                <h3>Fetching Users...</h3>
            )}
        </>
    )
}

export default AccountFetch
