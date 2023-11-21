import React, { useState } from 'react'
import './Admin.scss'
import { useSelector } from 'react-redux'
import NewCategoryForm from 'components/AdminComponent/NewCategoryForm'
import NewProductForm from 'components/AdminComponent/NewProductForm'
import { Route, Routes } from 'react-router-dom'
import Meals from 'components/meals/Meals'
import Types from 'components/types/Types'
import TypesAdmin from 'components/AdminComponent/TypesAdmin'
import ProductList from 'components/AdminComponent/Product.list'

function Admin() {
  const products = useSelector((state) => state.product)

  return (
    <div className="admin-page">
      <h1>Admin</h1>
      <h3>Добавить категорию</h3>
      <NewCategoryForm />

      <TypesAdmin />
    </div>
  )
}
export default Admin
