import { useState } from 'react'
import FormHandling from './components/FormHandling'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FormHandling />
    </>
  )
}

export default App
