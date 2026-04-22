import { createContext, useContext, useState } from "react"

const CardContext = createContext(null)

function CardHeader({ children }) {
    const context = useContext(CardContext)
    return (
        <div
            style={{ borderBottom: context?.border, cursor: 'pointer' }}
            onClick={context?.toggle}
        >
            {children}
        </div>
    )
}

function CardBody({ children }) {
    const context = useContext(CardContext)
    if (!context?.isOpen) return null;
    return <div style={{ padding: 2, border: context?.border }} >{children}</div>
}

function CardFooter({ children }) {
    const context = useContext(CardContext)
    return (
        <div style={{ borderTop: context?.border }}>
            {context.isOpen ? children: <span>Closed</span>}
        </div>
    )
}

function Card({ children }) {
    const [isOpen, setIsOpen] = useState(true)
    const value = {
        border: '2px solid red',
        isOpen,
        toggle: () => setIsOpen((prev) => !prev)
    };
    return (
        <CardContext.Provider value={value} >
            <div>{children}</div>
        </CardContext.Provider>
    )
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
