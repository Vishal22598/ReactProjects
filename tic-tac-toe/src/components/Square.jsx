import React, { useState } from "react";

function Square({value, onSquareClick}) {
  function handleClick(){
    onSquareClick()
    bgMusic()
  }
  return (
    <div>
      <button 
        className="square text-7xl border h-20 w-20"
        onClick={handleClick}
        >
            {value}
        </button>
    </div>
  );
}

export default Square;
