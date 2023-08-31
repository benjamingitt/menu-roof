import React, { useEffect, useLayoutEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './Meals.scss'
import { useDispatch, useSelector } from 'react-redux'
import Meal from '../Meal/Meal'
import { fetchProducts } from 'API/ProductService'
import { getProduct } from 'redux/dataReduser'

function Meals(products) {
  const id = useSelector((state) => state.types)

  let meals = []
  let CatagoryName
  let CatagoryId
  const product = products.data.filter((e) => e.id === id)
  meals = product[0].list

  CatagoryName = product[0].name
  CatagoryId = product[0].id

  return (
    <div className="meals-container">
      <h1>{CatagoryName}</h1>
      {meals.map((el) => (
        <Meal meal={el} CatagoryId={CatagoryId} key={uuidv4()} />
      ))}
    </div>
  )
}

export default Meals
