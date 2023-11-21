import React, { useEffect, useState } from 'react'
import { Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Types from '../types/Types'
import Orders from '../orders/Orders'
import Meals from '../meals/Meals'
import goBack from '../../assets/images/arrow-left.svg'
import './Home.scss'
import Admin from 'components/Admin/Admin'
import ProductList from 'components/AdminComponent/Product.list'
import { searchProducts } from 'API/ProductService'
import MealsSearch from 'components/meals/MealsSearch'

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
  const dispatch = useDispatch()

  const [inputText, setInputText] = useState('')
  let inputHandler = async (e) => {
    const lowerCase = e.target.value.toLowerCase()

    if (lowerCase.length > 2) {
      setInputText(lowerCase)
      const search = dispatch(await searchProducts(lowerCase))
    }
    return setInputText(lowerCase)
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
        <h1 className="neon">
          R<span>O</span>O<span>F</span>
        </h1>
        <span className="location">
          &nbsp; Казань, Саид-Галеева, 6 (​7 этаж)
        </span>
        <span className="phone-number">
          &nbsp; <a href="tel:+78432511311"> 8(843)251-13-11</a>
        </span>
        <input
          className={location.pathname !== '/' ? 'hide' : 'input-elevated'}
          value={inputText}
          placeholder="Поиск..."
          onChange={inputHandler}
        />
      </div>

      {products?.isLoading == 'succeeded' && inputText.length < 3 ? (
        <Routes>
          <Route exact path="/" element={<Types />} />
          <Route exact path="/meals" element={<Meals {...products} />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/admin/*" element={<Admin />} />
          <Route
            exact
            path="/admin/product"
            element={<ProductList {...products} />}
          />
        </Routes>
      ) : inputText.length > 2 && products?.isLoading == 'succeeded' ? (
        <MealsSearch />
      ) : (
        <div className="back-loading">
          <div className="loading"></div>
        </div>
      )}
      <div
        className={
          showOrder(meals) && location.pathname !== '/orders'
            ? 'order-display'
            : 'hide'
        }
        onClick={() => setInputText('')}
      >
        <Link to="/orders">
          <span>Мой выбор</span>
        </Link>
      </div>
    </div>
  )
}

export default Home
