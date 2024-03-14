import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount,AsynIncrement } from './reducers/counterSlice'

function App() {
  const {value} = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  console.log(value);

  return (
    <>
    <button onClick={()=>dispatch(increment())}>increment

    </button>
    counter {value}
    <button onClick={()=>dispatch(decrement())}>decrement

</button>
<button onClick={()=>dispatch(AsynIncrement(5))}>incrementByAmount

</button>

    </>
  )
}

export default App
