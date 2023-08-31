import { useSelector } from 'react-redux'
import React from 'react'
import CategoryItem from './Category'

const ProductList = () => {
  const todos = useSelector((state) => state.product.data)
  console.log(todos)
  return (
    <div>
      {todos.map((todo) => (
        <CategoryItem key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default ProductList
