import { useDispatch } from 'react-redux'
import ProductItem from './ProductItem'
import React, { useState } from 'react'
import { API_URL } from 'constants/constants'
import { deleteCategory } from 'API/ProductService'
import { Link } from 'react-router-dom'
import { setType } from 'redux/typesReducer'
import MyModal from './MyModal'
// import {toggleStatus, deleteCategory} from '../store/todoSlice';

const CategoryItem = ({ id, name, list, src, index }) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Link to="/admin/product">
        <div
          role="button"
          className="catagory-container"
          onClick={() => dispatch(setType(id))}
          tabIndex={index}
        >
          <h1>{name}</h1>
          <img src={API_URL + src} alt={name} />
        </div>
      </Link>
      <span className="span-del" onClick={() => dispatch(deleteCategory(id))}>
        &times;
      </span>
      <button onClick={() => setVisible(true)}>изменить</button>

      <MyModal
        visible={visible}
        setVisible={setVisible}
        product={false}
        category={{ id, name, list, src, index }}
      />
    </>
  )
}

export default CategoryItem
