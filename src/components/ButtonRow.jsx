export default function ButtonRow({ buttons, justify = 'center' }) {
  return (
    <div className="btn-row" style={{ justifyContent: justify }}>
      {buttons.map((btn, i) => (
        <a
          key={i}
          href={btn.href}
          {...(btn.to ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          className={`btn ${btn.variant === 'outline' ? 'btn-outline' : 'btn-primary'}`}
        >
          {btn.icon}
          {btn.text}
        </a>
      ))}
    </div>
  )
}
