import React from 'react'
import './Types.scss'
import { useSelector } from 'react-redux'
import Tabs from 'components/tabs/Tabs'
import { Route, Routes } from 'react-router-dom'

import Catagory from '../catagory/Catagory'

function Types() {
  const types = useSelector((state) => state.meals)
  const product = useSelector((state) => state.product.data)
  const tabs = useSelector((state) => state.tabs)
  const items = [
    { title: 'Кухня', index: 0, tab: '/' },
    { title: 'Бар', index: 1, tab: '#bar' },
  ]
  return (
    <>
      <Tabs items={items} />
      <div className="type-container">
        <Routes>
          <Route
            exact
            path={items[0].tab}
            element={product.map((el) =>
              el.index === tabs ? <Catagory catagory={el} key={el.name} /> : '',
            )}
          />
        </Routes>
      </div>
    </>
  )
}

export default Types
