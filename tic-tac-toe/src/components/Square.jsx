import React, { useState } from "react";

function Square({value, onSquareClick}) {
  return (
    <div>
      <button 
        className="square text-7xl border h-20 w-20"
        onClick={onSquareClick}
        >
            {value}
        </button>
    </div>
  );
}

export default Square;
