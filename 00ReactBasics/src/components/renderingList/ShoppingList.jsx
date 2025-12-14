import React from 'react'

const products = [
    {title: 'Cabbage', id: 1},
    {title: 'Garlic', id: 2},
    {title: 'Apple', id: 3},
]
const listItems = products.map(product => 
    <li key={product.id}>
        {product.title}
    </li>
)
function ShoppingList() {
  return (
    <div className='bg-green-600 p-3 rounded-2xl my-3 '>
      <ul>{listItems}</ul>
    </div>
  )
}

export default ShoppingList
