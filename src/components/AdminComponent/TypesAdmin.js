import React from 'react'
import { useSelector } from 'react-redux'
import Tabs from 'components/tabs/Tabs'
import { Route, Routes } from 'react-router-dom'
import Category from './Category'

function TypesAdmin() {
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
              el.index === tabs ? <Category key={el.id} {...el} /> : '',
            )}
          />
        </Routes>
      </div>
    </>
  )
}

export default TypesAdmin
