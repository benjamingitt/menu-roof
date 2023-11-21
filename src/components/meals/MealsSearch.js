import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './Meals.scss'
import { useSelector } from 'react-redux'
import Meal from '../Meal/Meal'

function MealsSearch() {
  const products2 = useSelector((state) => state.product)

  console.log(products2)

  return (
    <div className="meals-container">
      {products2.search.length > 0 ? (
        products2.search.map((el) => (
          <Meal meal={el} CatagoryId={1} key={uuidv4()} />
        ))
      ) : (
        <div className="meals-not">
          <h1>Ничего не найденно</h1>
        </div>
      )}
    </div>
  )
}

export default MealsSearch
