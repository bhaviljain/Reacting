import React from 'react'

export const Card = ({data ,index , handleClick}) => {
    const {image , name , added} = data;
  return (
       <div className=' w-80 bg-zinc-300 p-4 rounded-md relative'>
        <div className='w-20  h-20 bg-orange-600 '>
            <img src={image} className=' h-full rounded-full' alt=''/>
            
     <h3 className='text-xl whitespace-nowrap font-bold '>Song Name</h3>
     <span className='text-xs  whitespace-nowrap'>Artist Name : <span className='font-bold'>{name}</span></span>
     <div className='text-center ml-[100px]'>

     <button onClick={()=>handleClick(index)} className='absolute bottom-3 whitespace-nowrap bg-orange-600 w-[150px] rounded-full '>{added === false ?"Add to Favourite": 'remove'}</button>
     </div>

        </div>
        </div>

  )
}
