import React from 'react'
import Square from './Square'
import Board from './Board'

function Home() {
  return (
    <div>
      <div className=" bg-lime-500 h-screen w-screen place-items-center place-content-center">
        <div className=" bg-amber-500 ">
            <Board/>
        </div>
      </div>
    </div>
  )
}

export default Home
