import { useSelector } from 'react-redux'
import React from 'react'
import ProductItem from './ProductItem'
import NewProductForm from './NewProductForm'

const ProductList = (products) => {
  const id = useSelector((state) => state.types)
  let meals = []
  let CatagoryName
  const product = products.data.filter((e) => e.id === id)
  meals = product[0].list

  CatagoryName = product[0].name

  return (
    <div className="meals-container">
      <h3>Добавить продукт</h3>
      <NewProductForm />
      <h1>{CatagoryName}</h1>
      {meals.map((prod) => (
        <ProductItem key={prod.id} {...prod} />
      ))}
    </div>
  )
}

export default ProductList
