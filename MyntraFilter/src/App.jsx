import { useEffect, useState } from 'react'
import './App.css'
import {Bags} from "./Bags"
function App() {
  const filter = ["bags", "watches", "sports","sunglasses"]
  const [FilterData , setFilterData] = useState(Bags)
  const [active, setactive] = useState([])

  const handleClick = (e)=>{
    const category =e.target.id
    console.log(category);
    if(active.includes(category)){
      const filter = active.filter((el) => el !== category)
      setactive(filter)
    }
    else{
      setactive([...active, category])
    }
  }

const filterProd = () =>{
  if(active.length)
  {
   const tempItem = 
   Bags.filter((item)=>active.includes(item.category))
   setFilterData(tempItem)
  }
  else{
    setFilterData(Bags)
  }
}
console.log(active);
useEffect(()=>{
  filterProd()
},[active])


  return (
    <div className="App">
      <div className='filters'
        onClick={handleClick}
      >
        {
          filter.map((item, idx) => (
            <button
              className={active.includes(item) ? 'selected' : ''}
              key={idx}
              id={item}
            >{item}</button>
          ))
        }
      </div>

      <div className='product-list'>
        {
          FilterData.map((item, idx) => (
            <div className='item' key={idx}>
              <p>{item.name}</p>
              <p className='category'>{item.category}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App
