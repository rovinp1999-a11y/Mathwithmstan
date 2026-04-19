import { useState } from 'react'

export default function Tabs({ tabs, defaultTab = 0, showChibi = true, variant = 'default' }) {
  const [active, setActive] = useState(defaultTab)
  const [animKey, setAnimKey] = useState(0)

  const handleSwitch = (i) => {
    if (i !== active) {
      setActive(i)
      setAnimKey(k => k + 1)
    }
  }

  return (
    <div className={`tabs-container tabs--${variant}`}>
      <div className="tabs-bar-wrap">
        <div className="tabs-bar">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`tab-btn${active === i ? ' tab-active' : ''}`}
              onClick={() => handleSwitch(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {showChibi && <img src="/chibi-sit.png" alt="" className="tabs-chibi" aria-hidden="true" />}
      </div>
      <div className="tab-content" key={animKey}>
        {tabs[active].content}
      </div>
    </div>
  )
}
