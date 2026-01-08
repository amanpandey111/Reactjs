import './card.css'

function CardHeader({children}){
  return <div>{children}</div>
}

function CardBody({children}){
  return <div>{children}</div>
}

function CardFooter({children}){
  return <div>{children}</div>
}

function CardImage({children, src, className}){
  return <img src={src} alt="" className={className} />
}

const Card = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Card

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.Image = CardImage