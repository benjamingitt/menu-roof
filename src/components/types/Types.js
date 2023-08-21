import React from 'react'
import './Types.scss'
import { useSelector } from 'react-redux'
import Catagory from '../catagory/Catagory'

function Types() {
  const items = [
    { title: 'Кухня', index: 0 },
    { title: 'Бар', index: 1 },
  ]
  const types = useSelector((state) => state.meals)
  const [active, setActive] = React.useState(0)

  const openTab = (e) => setActive(+e.target.dataset.index)
  return (
    <div className="type-container">
      <div className="base-scrollbar">
        <div className="tab">
          {items.map((n, i) => (
            <button
              className={`tablinks ${i === active ? 'active' : ''}`}
              onClick={openTab}
              data-index={i}
              key={n.title}
              type="button"
            >
              {n.title}
            </button>
          ))}
        </div>
        test
      </div>
      {types.map((el) => (
        <>
          {active === el.index ? (
            <Catagory catagory={el} key={el.name} />
          ) : null}
        </>
      ))}
    </div>
  )
}

export default Types
