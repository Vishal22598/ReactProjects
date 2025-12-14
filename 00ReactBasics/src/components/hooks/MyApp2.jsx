import React, { useState } from 'react'

export default function MyApp2() {
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count + 1)
    }
  return (
    <div>
      <div className="bg-yellow-400 p-3 m-3 border rounded-2xl">
        <h1>Counters that update together</h1>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
      </div>
    </div>
  )
}

function MyButton({count, onClick}){

    return (
        <button 
            className='bg-white p-2 rounded-2xl border m-3 text-sm'
            onClick={onClick}>
            Clicked {count} times
        </button>
    )
}
