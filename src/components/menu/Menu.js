import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from 'API/ProductService';
import ProductList from 'components/AdminComponent/Product.list';
import Admin from 'components/Admin/Admin';
import MealsSearch from 'components/meals/MealsSearch';
import Types from '../types/Types';
import Orders from '../orders/Orders';
import Meals from '../meals/Meals';
import goBack from '../../assets/images/arrow-left.svg';
import './Menu.scss';

function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product);
  const meals = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(products?.isLoading !== 'succeeded');
  }, [products]);

  const showOrder = (input) => {
    let bool = false;
    input.forEach((element) => {
      if (element.order > 0) {
        bool = true;
      }
    });
    return bool;
  };

  const navigateBack = () => {
    navigate(-1);
  };

  const inputHandler = async (e) => {
    const lowerCase = e.target.value.toLowerCase();

    if (lowerCase.length > 2) {
      setInputText(lowerCase);
      const search = dispatch(await searchProducts(lowerCase));
    }
    return setInputText(lowerCase);
  };

  return (
    <div className="menu-page">
      <button
        className="goBack-wrapper"
        type="submit"
        onClick={navigateBack}
      >
        <img
          className={location.pathname === '/' ? 'hide' : 'go-Back'}
          src={goBack}
          alt="go-back"
        />
      </button>
      <div className="developer-information">
        {/* <h1 className="neon">
          R
          <span>O</span>
          O
          <span>F</span>
        </h1> */}
        <span className="location">
                    &nbsp; Казань, Саид-Галеева, 6 (​7 этаж)
        </span>
        <span className="phone-number">
          <a href="tel:+78432511311"> 8(843)251-13-11</a>
        </span>
        <input
          className={
                        location.pathname !== '/' ? 'hide' : 'input-elevated'
                    }
          value={inputText}
          placeholder="Поиск..."
          onChange={inputHandler}
        />
      </div>

      {!isLoading && inputText.length < 3 && (
        <Routes>
          <Route path="/" element={<Types />} />
          <Route path="/meals" element={<Meals {...products} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route
            path="/admin/product"
            element={<ProductList {...products} />}
          />
        </Routes>
      )}

      {!isLoading && inputText.length > 2 && <MealsSearch />}

      {isLoading && (
        <div className="back-loading">
          <div className="loading" />
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
  );
}

export default Menu;
