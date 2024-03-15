import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Shimmer } from './Shimmer'

const config = {
  rootMargin : "0px",
  threshold: 0.90,
}

function App() {
  const [count, setCount] = useState(false)


  useEffect(()=>{
    let observer = new window.IntersectionObserver(function(entries, self)
    {
      entries.forEach(entry=>{
        if(entry.isIntersecting){
       Loadimg(entry.target)
       self.unobserve(entry.target)

        }
      })
    },config)
    const imgs = document.querySelectorAll('[data-src]')
    imgs.forEach((img)=>{
      observer.observe(img)
    })

  })


  function Loadimg  (img){
  img.src = img.dataset.src
  }

  return (
    <>
    <div>
     <img className='img' src='https://media.istockphoto.com/id/186745538/photo/lotus-flower.webp?b=1&s=170667a&w=0&k=20&c=z565-6fGzrSftiZqTECaBM7CN60uuWY3WQKZPg9mdD0='/>
     <img  className='img' src='https://media.istockphoto.com/id/1194262354/photo/lotus-stem-for-sale-in-market.webp?b=1&s=170667a&w=0&k=20&c=J3qoQ28n4_GExjMz9O449iJwUeqic0jmEP-MP7_kQQs='/>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, veniam incidunt! Alias, illum? Ex ipsa magni eos provident quasi exercitationem dolore id et perspiciatis unde enim, consectetur nostrum ut molestias.</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, veniam incidunt! Alias, illum? Ex ipsa magni eos provident quasi exercitationem dolore id et perspiciatis unde enim, consectetur nostrum ut molestias.</p>
     <img  src={''} data-src={'https://media.istockphoto.com/id/1335845017/photo/pink-blooming-lotus-close-up.webp?b=1&s=170667a&w=0&k=20&c=iqCdlDhM9PNjs8WcpqheQhYp9PGOALCl72hhnDj9ttw='} 
         className={count ? "loaded" : <Shimmer />}

     onLoad={()=>setCount(true)}
     alt='ok'/>
     <img src={''} data-src={'https://media.istockphoto.com/id/495436696/photo/beauty-in-nature.webp?b=1&s=170667a&w=0&k=20&c=FpKfDiH-CdmKbpE6puPwNJcuqPzE0liEu-XBiGBXXTM='} 
         className={count ? "loaded" : <Shimmer />}
         onLoad={()=>setCount(true)}

     alt='ok'/>
     </div>
    </>
  )
}

export default App
