import { deleteProduct } from 'API/ProductService'
import { API_URL } from 'constants/constants'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyModal from './MyModal'
// import {toggleStatus, deleteProduct} from '../store/todoSlice';

const ProductItem = ({ id, name, src, description, price, size }) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const idCat = useSelector((state) => state.types)

  return (
    <div className="meal-container">
      <div className="image-container">
        {src ? <img src={API_URL + src} alt={name} /> : null}
      </div>
      <div className="name-container">
        <span>{name} </span>
        <span className="size"> {size} </span>
        <span
          className="span-del"
          onClick={() => dispatch(deleteProduct({ id, idCat }))}
        >
          {' '}
          &times;{' '}
        </span>
      </div>
      <div className="discription-container">
        <p>{description}</p>
      </div>
      <div className="price-and-order-container">
        <span className="span1">{price}</span>
      </div>
      <button onClick={() => setVisible(true)}>изменить</button>
      <MyModal
        visible={visible}
        setVisible={setVisible}
        product={{ id, name, src, description, price, size }}
        category={false}
      />
    </div>
  )
}

export default ProductItem
