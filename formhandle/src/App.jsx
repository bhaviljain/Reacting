import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  {Form}  from './components/Form'
import  {Card}  from './components/Card'
import Cards from './components/Cards'

function App() {
  const [user, setUser] = useState([])
  const handleFormSubmitedata = (data) =>{
    setUser([...user, data])
  }
  const RemoveBtn=(id) =>{
  setUser(user.filter((item,index)=> index != id))
  }
  return (
    <>
    <div className='flex flex-wrap gap-3'>
    <Cards RemoveBtn ={RemoveBtn} user ={user}/>
    <Form handleFormSubmitedata={handleFormSubmitedata}/>

    </div>
   </>
  )
}

export default App
