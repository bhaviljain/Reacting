import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './Context'
const User = () => {
    const{users , setUsers} = useContext(UserContext)
  return (
    <div className='flex gap-3'>
       {users.map((u)=>(
        <Link to={`/user/${u.id}`}>
          {u.name}
        </Link>
       ))}
    </div>
  )
}

export default User