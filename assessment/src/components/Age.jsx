import React, { useEffect } from 'react'
import { useState } from 'react'
import { PiTrendUp } from 'react-icons/pi'

const Age = ({dob,data,id}) => {

    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
    const [age, setAge] = useState(getAge(dob))


    const handleEdit = (id)=>{
    const edit = data.filter(item => item.id === id)
    if(edit !== undefined)
    {
      setAge(edit[0].dob)
    }

    }
   

      const handleSave = (e) =>{

  
        const dt =[...data]
        const obj = {
        dob : getAge(dob)
        }
        dt.push(obj)
        setAge(dt)
        }

        const handleUpdate =()=>{
          const index = data.map((item)=>{
            return item.id
          }).indexOf(id)
         const dt = [...data]
         dt[index].dob = getAge(dob)
         setAge(dt)
        }
    
  return (
    <>
    <input value={age}
    onChange={(e)=>setAge(e.target.value)}
    maxLength="2"></input>
    <button onClick={()=>handleEdit(id)}  className={`ste}`
    }
    >Edit</button>
    <button onClick={()=>handleSave(age)}>Save</button>

    </>
  )
}

export default Age



