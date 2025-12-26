
const Modal = ({children, isOpen, onCloseModal}) => {
  if(!isOpen) return null
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {children}
        <button className="modal-close" onClick={onCloseModal} style={{
          backgroundColor: '#F5C6CB',
          padding: '5px',
          borderRadius: '8px',
          color: 'white',
          fontSize: '15px',
          fontWeight: '600',
          cursor: 'pointer'
        }} >close</button>
      </div>
    </div>
  )
}

export default Modal

function ModalHeader({children}){
  return <div className="modal-header" > {children} </div>
}

function ModalBody({children}){
  return <div> {children} </div>
}

function ModalFooter({children}){
  return <div>{children}</div>
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody
Modal.Footer = ModalFooter;
