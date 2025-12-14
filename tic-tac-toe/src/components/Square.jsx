import React from "react";

function Square({value}) {
    function handleClick(){
        console.log('clicked')
    }
  return (
    <div>
      <button 
        className="square text-7xl border px-4 py-1 "
        onClick={handleClick}
        >
            {value}
        </button>
    </div>
  );
}

export default Square;
