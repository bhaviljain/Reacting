import React from "react"

const PropsReact = ({values , handleClick ,index}) => {
  const {name, professtion , image, friend} = values;
  return ( 
    <div className="p-4">
      <div className="bg-white h-20 w-[90px]">
      <img className="h-full w-full object-cover object-top" src={image}></img>
      </div>
      <div className="w-[90px] h-20 bg-sky-200">
      <h3>{name}</h3>
      <h3>{professtion}</h3>
      <button onClick={()=>handleClick(index)} className="bg-blue-500 rounded-lg">{friend === true ? 'Friend' : 'Add friend'}</button>
    </div>
    </div>
    
  )
}

export default PropsReact