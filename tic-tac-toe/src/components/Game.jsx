import React, { use, useState } from 'react'
import Board from './Board'

function Game() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares){
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
      setHistory(nextHistory)
      setCurrentMove(nextHistory.length-1)
      setXIsNext(!xIsNext)
    }

    function jumpTo(nextMove){
      setCurrentMove(nextMove)
      setXIsNext(nextMove % 2 === 0)
    }

    const moves = history.map((squares, move) => {
      let description;
      if(move > 0){
        description = "Go to move #" + move;
      }else{
        description = "Go to game start";
      }
      return (
        <li className='bg-amber-300 border rounded-md p-1 m-0.5' key={move}>
          <button className='' onClick={() => jumpTo(move)}>{description}</button>
        </li>
      )
    })
  return (
    <div className='flex gap-18 '>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
