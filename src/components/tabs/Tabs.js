import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setTab } from 'redux/tabsReducer'

function Tabs({ items }) {
  const dispatch = useDispatch()
  const tabs = useSelector((state) => state.tabs)

  const openTab = (e) => {
    dispatch(setTab(+e.target.dataset.index))
  }

  return (
    <div className="base-scrollbar">
      <div className="tab">
        {items.map((n, i) => (
          <Link to={n.tab} className="link" key={n.title}>
            <button
              className={`tablinks ${i === tabs ? 'active' : ''}`}
              onClick={openTab}
              data-index={i}
              key={n.title}
              type="button"
            >
              {n.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tabs
