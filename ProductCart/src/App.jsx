import Item from './component/item'
import Cart from './component/Cart'

function App() {

  return (
    <div className='app'>

     <Item name="MacBook" price = {100000}></Item>
     <Item name="Mobile" price = {50000}></Item>
     <Item name="Watch" price = {2000}></Item>
     <Cart />

     </div>
     
  )
}

export default App
