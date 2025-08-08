
const FAQ = ({curEle, isActive, onToggle }) => {
  return (
        <li key={curEle.id}>
            <div className="accordion-grid">
                <p className="accordion-question">{curEle.question}</p>
                <button onClick={onToggle} className={isActive ? "active-btn" : ""}>{isActive ? "close" : "show"}</button>
            </div>
            {isActive && <p> {curEle.answer} </p>}
        </li>
  )
}

export default FAQ