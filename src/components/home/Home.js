import React, { useEffect } from 'react'
import { Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Types from '../types/Types'
import Orders from '../orders/Orders'
import Meals from '../meals/Meals'
import goBack from '../../assets/images/arrow-left.svg'
import './Home.scss'
import Admin from 'components/Admin/Admin'

function Home() {
  const location = useLocation()
  const navigate = useNavigate()
  const products = useSelector((state) => state.product)
  const meals = useSelector((state) => state.meals)

  const showOrder = (input) => {
    let bool = false
    input.forEach((element) => {
      if (element.order > 0) {
        bool = true
      }
    })
    return bool
  }
  const navigateBack = () => {
    navigate(-1)
  }

  return (
    <div className="home-page">
      <button className="goBack-wrapper" type="submit" onClick={navigateBack}>
        <img
          className={location.pathname === '/' ? 'hide' : 'go-Back'}
          src={goBack}
          alt="go-back"
        />
      </button>
      <div className="developer-information">
        <h1>Roof bar menu</h1>
        <span className="location">&nbsp; Казань , Татарстан</span>
        <span className="phone-number">&nbsp; +79872767766</span>
      </div>

      {products?.isLoading == 'succeeded' ? (
        <Routes>
          <Route exact path="/" element={<Types />} />
          <Route exact path="/meals" element={<Meals {...products} />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      ) : (
        <h1>Loading...</h1>
      )}
      <div
        className={
          showOrder(meals) && location.pathname !== '/orders'
            ? 'order-display'
            : 'hide'
        }
      >
        <Link to="/orders">
          <span>Мой выбор</span>
        </Link>
      </div>
    </div>
  )
}

export default Home
