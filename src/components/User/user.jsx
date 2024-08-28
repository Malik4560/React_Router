import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='center-text'>user:{userid} </div>
    )
}

export default User
