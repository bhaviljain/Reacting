import React from 'react'
import { Card } from './Card'

const Cards = ({user , RemoveBtn}) => {
  return (
    <div className='w-full overflow-auto p-4 flex '>
        {user.map((item,index)=>{
           return <Card RemoveBtn ={RemoveBtn} users = {item} key={index} id={index}/>
        })}
    </div>
  )
}

export default Cards