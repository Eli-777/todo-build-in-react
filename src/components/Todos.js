import React from 'react';

import TodoItem from './TodoItem'

function Todos({ todos, handleClick, handleKeyUp,doneEdit, handleChangeEdit, currentEdit, }) {
  return (
    <div className="todos">
      {
        todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            handleClick={handleClick} 
            handleKeyUp={handleKeyUp} 
            doneEdit={doneEdit}
            handleChangeEdit={handleChangeEdit}
            currentEdit={currentEdit}

          />
        ))
      }
    </div>
  );
}

export default Todos;