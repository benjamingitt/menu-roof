import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Meal from '../Meal/Meal'
import './Orders.scss'

function Orders() {
  const navigate = useNavigate()
  const emptyOrder = (
    <div className="empty-order">
      <h2>EMPTY ORDER</h2>
      <div>
        <button type="submit" onClick={() => navigate(-1)}>
          Обратно в меню
        </button>
      </div>
    </div>
  )
  const chooseOrderedFoods = (state) => {
    const arr = []
    state.forEach((element) => {
      if (element.order > 0) {
        arr.push({ ...element, CatagoryId: element.id })
      }
    })
    return arr
  }
  const orderedMeal = useSelector((state) => chooseOrderedFoods(state.meals))
  return (
    <div className="meals-container">
      <h1>Мой выбор</h1>
      {orderedMeal.length > 0
        ? orderedMeal.map((el) => (
            <Meal meal={el} CatagoryId={el.CatagoryId} key={uuidv4()} />
          ))
        : emptyOrder}
    </div>
  )
}

export default Orders
