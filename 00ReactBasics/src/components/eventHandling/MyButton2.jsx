import { useState } from "react"
let content;
export function MyButton2(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(prev => prev+1)
        content = count  % 2 != 0 ? "even" : "odd"
        // alert('You clicked me!')
    }
    return (
        <button 
            onClick={handleClick}
            className="bg-blue-600 rounded-xl p-2 my-3 border border-yellow-500 text-white text-md"
            >
            Click me {count} times {content}
        </button>
    )
}