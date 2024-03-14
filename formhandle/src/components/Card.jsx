import React from 'react'

export const Card = ({users ,RemoveBtn , id}) => {
  return (
    <div className='m-auto mt-4 w-[130px] h-[130px] bg-blue-500 flex flex-col justify-center items-center'>
        <div className='image w-[30px] h-[30px] bg-blue-700 rounded-3xl'>
            <img className='h-full w-full object-cover'
             src={users.imageURL}></img>
        </div>
   <h2>{users.name}</h2>
   <h2>{users.email}</h2>
   <h4 className='text-xs'>Lorem ipsum dolor, sit amet </h4>
    {/* </div> */}
    <button onClick={()=>RemoveBtn(id)} className='text-xs rounded-xl bg-red-800'>Remove it</button>
        
    </div>
    )
}
    
  