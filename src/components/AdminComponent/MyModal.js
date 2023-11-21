import React from 'react'
import './MyModal.scss'
import NewProductForm from './NewProductForm'
import EditProductForm from './EditProductForm'
import EditCategoryForm from './EditCategoryForm'

const MyModal = ({ visible, setVisible, product, category }) => {
  return (
    <div
      onClick={() => setVisible(false)}
      style={{ backgroundColor: 'transparent' }}
      className={visible ? 'myModal active' : 'myModal'}
    >
      <div className="myModalContent" onClick={(e) => e.stopPropagation()}>
        {category ? (
          <EditCategoryForm {...category} />
        ) : (
          <EditProductForm {...product} />
        )}
      </div>
    </div>
  )
}

export default MyModal
