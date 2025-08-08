import React from 'react'

const TodoForm = ({handleFormSubmit,inputValue,handleInputChange}) => {
    
  return (
    <section className="form">
        <form onSubmit={handleFormSubmit}>
            <div>
                <input type="text" 
                    value={inputValue}
                    onChange={(event)=>{
                    handleInputChange(event.target.value)
                }}
                    className='todo-input' autoComplete='on' />
            </div>
            <div>
                <button type='submit' className='todo-btn'>Add Task</button>
            </div>
        </form>
    </section>
  )
}

export default TodoForm