import { useDispatch } from 'react-redux';
import './App.scss';
import React, { useEffect } from 'react';
import { fetchProducts } from 'API/ProductService';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import StartPage from './components/StartPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/menu/*" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
