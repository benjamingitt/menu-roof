import { useDispatch } from 'react-redux'
import './App.scss'
import Home from './components/home/Home'
import { useEffect } from 'react'
import { fetchProducts } from 'API/ProductService'
import React from 'react'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
