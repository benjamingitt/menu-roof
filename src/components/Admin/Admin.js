import React, { useState } from 'react'
import './Admin.scss'
import ProductList from 'components/AdminComponent/Product.list'
import { useDispatch } from 'react-redux'
import { addNewProduct } from 'API/ProductService'
import NewCategoryForm from 'components/AdminComponent/NewCategoryForm'
import NewProductForm from 'components/AdminComponent/NewProductForm'

function Admin() {
  return (
    <div className="admin-page">
      <h1>Admin</h1>
      <h3>Добавить категорию</h3>
      <NewCategoryForm />
      <h3>Добавить продукт</h3>

      <NewProductForm />
      <ProductList />
    </div>
  )
}
export default Admin
