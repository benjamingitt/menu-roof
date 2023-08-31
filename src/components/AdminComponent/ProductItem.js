import { deleteProduct } from 'API/ProductService'
import { API_URL } from 'constants/constants'
import React from 'react'
import { useDispatch } from 'react-redux'
// import {toggleStatus, deleteProduct} from '../store/todoSlice';

const ProductItem = ({ id, name, src, description, price }) => {
  const dispatch = useDispatch()
  function Test() {
    return
  }

  return (
    <div>
      <span>(id-{id}) </span>
      <span>{name}</span>
      <div> {description}</div>
      <span> {price} руб</span>
      <img src={API_URL + src} alt="" />
      <span onClick={() => dispatch(deleteProduct(id))}>&times;</span>
    </div>
  )
}

export default ProductItem
