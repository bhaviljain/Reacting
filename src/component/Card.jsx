import React from 'react'

export const Card = () => {
    const data = [{
        name:"Song1",
        des :"alka"
    },
    {
        name:"Song2  ",
        des :"alka"
    }
    ]
  return (
    <div className="bg-zinc-300 flex flex-col justify-center items-center">
     {data.map((item,index)=>(
          <div className='song  px-3 py-2 bg-zinc-50 rounded'>

          <h3 className='font-semibold'>{item.name}</h3>
          <p>vhhftftyfvhvhvhgfyytfgh</p>
          <button className='bg-blue-500 rounded-sm hover:bg-blue-300'>download song</button>
      </div>
     ))}
    
    </div>
  )
}

// import React, { useState } from 'react'

// export const Card = () => {
//   const[count , setCount] = useState(0)
//   // const handleClick = () =>
//   // {
//   //   setCount((prev)=>prev + 2);
//   //   setCount((prev)=>prev + 1);
//   //   setCount((prev)=>prev + 1); //this is because react check and see that this is doing same work so it will bundle everything together.
//   // }
//   return (
//     <div className='px-4'>
//       <h1>{count}</h1>
// <button onClick={()=>setCount((prev)=>prev + 1)}>Count</button>
// <button onClick={()=>setCount((prev)=>prev - 1)}>Count</button>
// {/* <button onClick={handleClick}>Count</button> */}
      
//     </div>
//   )
// }

// import React from 'react'
// import { useState } from 'react'

// export const Card = () => {
//   const [value,setValue] = useState({name:'bhavil', banned: true})
//   return (
//     <div className='px-3'>
      
//       {value.name}
//       {value.banned.toString()}
//       <div>
//       <button onClick={()=>setValue({...value, banned: ! value.banned})}>Change</button>
    
//       </div>
//     </div>
//   )
// }

// import React from 'react'
// import { useState } from 'react'
// export const Card = () => {
//   const [value,setValue] = useState([1,2,3,4,5])
//   return (
//     <div>
//       <div>
//       {value.map(item=><h1>{item}</h1>)}
//       </div>
//       <button onClick={()=>setValue(()=>value.filter((item,index)=>index%2 == 0))}>Remove</button>
//     </div>
//   )
// }


// import React from 'react'
// import { useState } from 'react'
// export const Card = () => {
//   const [value,setValue] = useState([
//     {name: 'bhavil', age:22},
//     {name: 'Rohan', age:24},
//     {name: 'Shubham', age:28}
//   ])
//   return (
//     <div>
//       <div>
//       {value.map(item=>(<h1>
//   {item.name}
//   {item.age}
//       </h1>))}
//       </div>
//       <button onClick={()=>setValue(()=>value.map(item=> item.name === "Rohan" ? {name: "Rohan" , age: 25} : item ))}>Remove</button>
//     </div>
//   )
// }

// import React, { useState } from 'react'
// import { FaArrowRight } from "react-icons/fa";

// export const Card = () => {
//   const [val , setVal] = useState(false)
//   return (
//     <div>Card
//       <div className='relative flex overflow-hidden'>
//       <img className={`shrink-0 transition-transform  ${val === false ?'-translate-x-[0%]' : "-translate-x-[100%]"} object-cover `} src='https://images.unsplash.com/photo-1706783704217-d24930736585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D'/>

//       <img className={`shrink-0 transition-transform ${val === false ?'-translate-x-[0%]' : "-translate-x-[100%]"}`} src='https://petapixel.com/assets/uploads/2022/12/what-is-unsplash.jpg'/>
//       <span onClick={()=>setVal(()=>!val)} className= 'bg-red-800 absolute bottom-4 left-1/2 p-4'>
//       <FaArrowRight />
//       </span>
//       </div>
//     </div>
//   )
// } //ep 10


