import React from 'react'

export const Inputtimer = ({handleInput, handleStart}) => {
  return (
     <div className='input-container'>
          <div className='inputbox'>
            <input id='hours' placeholder='HH' onChange={handleInput} />
            <input id='minutes' placeholder='HH' onChange={handleInput} />
            <input id='seconds' placeholder='HH' onChange={handleInput} />
          </div>
          <button onClick={handleStart}>Start</button>
        </div>

  )
}
