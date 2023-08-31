import { useDispatch } from 'react-redux'
import ProductItem from './ProductItem'
import React from 'react'
import { API_URL } from 'constants/constants'
import { deleteCategory } from 'API/ProductService'
// import {toggleStatus, deleteCategory} from '../store/todoSlice';

const CategoryItem = ({ id, name, list, src, index }) => {
  const dispatch = useDispatch()
  function Test() {
    return
  }

  return (
    <div>
      <h2>
        (id-{id}) {name}
      </h2>
      <span> tab - {index}</span>
      <img src={API_URL + src} />
      <span onClick={() => dispatch(deleteCategory(id))}>&times;</span>
      {list.map((prod) => (
        <ProductItem key={prod.id} {...prod} />
      ))}
    </div>
  )
}

export default CategoryItem
