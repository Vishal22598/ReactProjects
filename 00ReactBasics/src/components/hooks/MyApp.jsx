import React, { useState } from 'react'

export default function MyApp() {
    
  return (
    <div>
      <div className="bg-yellow-200 p-3 m-3 border rounded-2xl">
        <h1>Counters that update separately</h1>
        <MyButton/>
        <MyButton/>
      </div>
    </div>
  )
}

function MyButton(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    }

    return (
        <button 
            className='bg-white p-2 rounded-2xl border m-3 text-sm'
            onClick={handleClick}>
            Clicked {count} times
        </button>
    )
}
