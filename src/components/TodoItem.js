import React, { useEffect } from 'react';
import clsx from 'clsx';

function TodoItem({ todo, handleClick, handleKeyUp, doneEdit, handleChangeEdit, currentEdit }) {

  let inputElement = null;
  useEffect(() => {
    if (todo.isEdit) {
      inputElement.focus();
    }
  }, [inputElement, todo.isEdit]);


  return (
    <div className={clsx('task-item', { done: todo.isDone, edit: todo.isEdit })}>
      <div className="task-item-checked">
        <span className="icon icon-checked" onClick={() => handleClick('done', todo.id)}>
          <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#ff6600" fillRule="evenodd"
              d="M12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-17c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9">
            </path>
          </svg>
        </span>
      </div>

      <div className="task-item-body" onDoubleClick={() => handleClick('edit', todo.id)}>
        <span className="task-item-body-text">{todo.title}</span>
        <input
          className="task-item-body-input"
          type="text"
          placeholder="新增工作"
          value={currentEdit}
          onChange={handleChangeEdit}
          onKeyUp={handleKeyUp.bind(this, todo.id, currentEdit)}
          onBlur={doneEdit.bind(this, todo.id, currentEdit)}
          ref={(element) => { inputElement = element }}
        />
      </div>
      <div className="task-item-action">
        <button className="btn-reset btn-destroy icon" onClick={() => handleClick('delete', todo.id)}> </button>
      </div>
    </div>
  );
}

export default TodoItem;