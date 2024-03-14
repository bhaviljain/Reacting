import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='flex p-2 py-3 justify-between items-center'>
        <h3>Orange</h3>
        <div className='flex p-2 px-4 bg-orange-600 text-white gap-2'>
<h3>Favourites</h3>
<h4>{data && data.filter(item=>item.added).length}</h4>
        </div>
    </div>
  )
}

export default Navbar