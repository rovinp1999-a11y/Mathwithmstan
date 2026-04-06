import { useMemo } from 'react'

const symbols = ['π', '∑', '∫', 'Δ', '√', '∞', 'θ', 'α', 'β', 'λ', '±', '÷', '×', '≈', '≠', '≤', '≥', 'φ', 'σ', 'μ', 'ε', '∂', '∇', 'ω', 'ℝ', '∈', '⊂', '∪', '∩', 'ƒ', '∀', '∃']

export default function MathSymbols({ count = 30 }) {
  const items = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      symbol: symbols[i % symbols.length],
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 6 + Math.random() * 10,
      size: 12 + Math.random() * 22,
      opacity: 0.06 + Math.random() * 0.14,
    })), [count]
  )

  return (
    <div className="math-symbols" aria-hidden="true">
      {items.map((item, i) => (
        <span
          key={i}
          className="math-sym"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
            opacity: item.opacity,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  )
}
