import  faker from 'faker'
import { useState } from 'react';
import SingleProduct from './SingleProduct';
import "../style.css"
import { Cart } from './Context';
import { useContext } from 'react';

faker.seed(100);
const Home = () => {


    const ProductArray = [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.datatype.number({min: 100, max: 1000}),
        image:" https://source.unsplash.com/random/300x200?sig=${Math.random()*2}"
    }))
    console.log(ProductArray);
    const [product] = useState(ProductArray)
  return (
    <div className='flex flex-wrap justify-center gap-4'>
    {product.map((prod)=>(
        <SingleProduct prod = {prod} key={prod.id}/>
   ))}
    </div>

  )
}

export default Home