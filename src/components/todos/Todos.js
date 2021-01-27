import React from 'react';

import TodoItem from '../todoItem/TodoItem'

function Todos({ todos, ...props }) {
  return (
    <div className="todos">
      {
        todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            {...props}

          />
        ))
      }
    </div>
  );
}

export default Todos;