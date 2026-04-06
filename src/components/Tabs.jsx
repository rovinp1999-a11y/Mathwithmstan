import { useState } from 'react'

export default function Tabs({ tabs, defaultTab = 0 }) {
  const [active, setActive] = useState(defaultTab)

  return (
    <div className="tabs-container">
      <div className="tabs-bar">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`tab-btn${active === i ? ' tab-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[active].content}
      </div>
    </div>
  )
}
