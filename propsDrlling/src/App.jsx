import { useState } from 'react'
import Navbar from './component/Navbar'
import { Card } from './component/Card'

function App() {
const data = [
  {image:"https://media.istockphoto.com/id/1086607844/photo/young-man-playing-a-guitar-at-home.webp?b=1&s=170667a&w=0&k=20&c=0MP0G2LvIJtQlAtypZqb4ldaz990_NFsCQdIq6B7Z3Q=", name:'Bhavil', added: false},
  {image:"https://media.istockphoto.com/id/628541630/photo/boy-with-glasses-playing-acoustic-guitar-in-living-room.webp?b=1&s=170667a&w=0&k=20&c=uk1pQUy353wYGvmAcvp7ejhqBInKFq0FV2_0v0axnVA=", name:'Ricky', added: false},
  {image:"https://media.istockphoto.com/id/937749756/photo/boy-playing-acoustic-guitar.webp?b=1&s=170667a&w=0&k=20&c=H5V7slhsOwmVIl8nV9xgLNDT8WMcSKPncbaE4AEic34=", name:'Teena', added: false},
  {image:"https://media.istockphoto.com/id/1266704172/photo/teenager-working-on-new-song.webp?b=1&s=170667a&w=0&k=20&c=WUmg-QWceZfJGilm_9MmHWFQJDhlOOLGDDKEN3SqlkU=", name:'Mayur', added: false},
]
const [SongData , setSongData] = useState(data)  
const handleClick = (index) =>
{
  setSongData((prev)=>{
  return prev.map((item, itemIndex)=>{
    if(itemIndex === index) return {...item ,
       added: !item.added}
   return item;
  })
  })
}
  return (
    <>
    <div className='w-full h-screen'>
      <Navbar data={SongData} />
      <div className='flex flex-wrap gap-[50px] ml-5'>
   {SongData.map((obj ,index)=>{
         return <Card data={obj} index={index} key={index} handleClick ={handleClick}/>
   })}
      
     
      </div>
      </div>
    </>
  )
}

export default App
