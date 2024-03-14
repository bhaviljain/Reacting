import React, { useContext } from 'react'
import { UserContext } from './Context'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export const UserDetails = () => {
    const navigate = useNavigate()
    const handleGobackClick = () => {
        navigate(-1)
    }
    const {id} = useParams()
    const {users} = useContext(UserContext)
  return (
    <div>
        <h1>{users[id].name}</h1>
        <h1>{users[id].city}</h1>
        <h1>{users[id].age}</h1>
        <button onClick={handleGobackClick} className='bg-blue-500'>Go back</button>
    </div>
  )
}
