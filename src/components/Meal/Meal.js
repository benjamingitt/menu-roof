/* eslint-disable */
import './Meal.scss'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import plus from '../../assets/images/plus.svg'
import plus2 from '../../assets/images/plus2.svg'
import minus from '../../assets/images/dash.svg'
import { increament, decreament } from '../../redux/dataReduser'
import { API_URL } from 'constants/constants'

function Meal(props) {
  const { CatagoryId, meal } = props
  const { id, src, name, description, price, size } = meal
  const meals = useSelector((state) => state.meals)
  const orderFind = meals.filter((prod) => prod.id === id)

  const orderVal = orderFind.length !== 0 ? orderFind[0].order : 0
  const dispatch = useDispatch()
  const payload = {
    CatagoryId,
    typeId: id,
    meal,
  }

  const decrease = () => {
    dispatch(decreament(payload))
  }

  return (
    <div className="meal-container">
      <div className="image-container">
        {src ? <img src={API_URL + src} alt={name} /> : null}
      </div>
      <div className="name-container ">
        <span>{name}</span>
        <span className="size">{size}</span>
      </div>
      <div className="discription-container">
        <p>{description}</p>
      </div>
      <div className="price-and-order-container">
        <span className="span1">{price}</span>
        <div className={orderVal > 0 ? 'counter' : 'hide'}>
          <img
            src={minus}
            alt="minus"
            onClick={decrease}
            onKeyDown={decrease}
            className="minus"
            role="button"
            tabIndex={0}
          />
          <span>{orderVal}</span>
          <img
            className="plus2"
            src={plus2}
            alt="plus"
            onClick={() => dispatch(increament(payload))}
          />
        </div>
        <img
          src={plus}
          alt="plus-sign"
          onClick={() => dispatch(increament(payload))}
          className={orderVal > 0 ? 'hide' : ''}
        />
      </div>
    </div>
  )
}
Meal.propTypes = {
  meal: PropTypes.shape({
    name: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.number,
    discription: PropTypes.string,
    order: PropTypes.number,
    price: PropTypes.number,
    size: PropTypes.string,
  }).isRequired,
  CatagoryId: PropTypes.number.isRequired,
}
export default Meal
