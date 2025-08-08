import React, { memo } from 'react'

const ChildComponent = memo(
    (props) => {
        console.log("child component got re-rendered");
        return (
          <div>
              <button onClick={props.handleClick}>
                  {props.buttonName}
              </button>
          </div>
        )
      }
)

export default ChildComponent