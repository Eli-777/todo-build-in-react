import React from 'react'
import clsx from 'clsx';

function AddTodo({ handleChange, inputValue, handleClick }) {
  return (
    <div className={clsx("add-todo", { active: inputValue })}>
      <label className="add-todo-icon icon" htmlFor="add-todo-input"></label>
      <div className="add-todo-input">
        <input 
          id="add-todo-input" 
          type="text" 
          placeholder="新增工作" 
          value={inputValue} 
          onChange={handleChange} 
      />
      </div>
      <div className="add-todo-action">
        <button 
          className="btn-reset btn-add" 
          onClick={() => handleClick('add')}
        > 
          新增 
        </button>
      </div>
    </div>
  )
}

export default AddTodo
