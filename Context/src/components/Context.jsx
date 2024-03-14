import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const Context = (props) => {
    const [users, setUsers] = useState([
        {id:0 , name: 'John' ,age:30, city:"San Francisco"},
        {id:1, name: 'Bhavil', age:22,city:"San Deigo"},
        {id:2 , name: 'Suman', age:20, city:"LA"},
    ])
  return (
    <UserContext.Provider value={{users, setUsers}}>
   {props.children}

    </UserContext.Provider>

  )
}

export default Context