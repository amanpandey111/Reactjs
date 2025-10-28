import React from 'react'
import './style.css'
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const NotificationType = {
  info : <InfoOutlineIcon/>,
  danger : <AddAlertOutlinedIcon/>,
  success : <CheckCircleOutlineOutlinedIcon/>
}

const Notification = ({
  id = "",
  title = "fgve",
  description = "egwv",
  onRemove,
  cta = "",
  type = "danger",
  updateToast = () => {},
  exiting
}) => {
  console.log(exiting,id);
  function handleRemove() {
    updateToast(id)
  }
  return (
    <div data-type={type} className='toast'>
      {!!onRemove && <button className="toast-close" style={{ cursor: "pointer" }} onClick={()=>handleRemove(id)}>&times;</button>}
      <div className="toast-content">
        <div className="toast-info">
          {NotificationType[type]}
          <div className="toast-title-desc">
            <span>{title}</span>
            {!!description && <span>{description}</span>}
          </div>
        </div>
        {!!cta && <div className='toast-cta' >{cta}</div>}
      </div>
      <div className="toast-progress"></div>
    </div>
  )
}

export default Notification