import React from 'react'

function Tabs({ items }) {
  const [active, setActive] = React.useState(null)

  const openTab = (e) => setActive(+e.target.dataset.index)
  const TabContent = ({ title }) => (
    <div className="tabcontent">
      <h3>{title}</h3>
    </div>
  )
  return (
    <div>
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
      {
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        items[active] && <TabContent {...items[active]} />
      }
    </div>
  )
}

export default Tabs
