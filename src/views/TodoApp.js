import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router-dom'


import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import AddTodo from '../components/addTodo/AddTodo'
import Todos from '../components/todos/Todos'

import '../App.scss';

const defaultTodos = [
  {
    id: uuidv4(),
    title: 'Learn React',
    isDone: false,
    isEdit: false
  },
  {
    id: uuidv4(),
    title: 'Become Frontend Developer',
    isDone: true,
    isEdit: false
  },
  {
    id: uuidv4(),
    title: 'Learn React from Hooks',
    isDone: false,
    isEdit: false
  },
]

function TodoApp({ response, handleFBLogout }) {
  const [todos, setTodos] = useState(defaultTodos)
  const [inputValue, setInputValue] = useState('')
  const [currentEdit, setCurrentEdit] = useState('')
  const numOfRemaining = todos.filter(todo => !todo.isDone).length


  if (response !== 'connected') {
    return <Redirect to="/login" />
  }


  function handleClick(type, id) {
    switch (type) {
      case 'add':
        return handleAdd()
      case 'done':
        return handleDone(id)
      case 'delete':
        return handleDelete(id)
      case 'edit':
        return toggleIsEdit(id)
      case 'clear':
        return handleClear()

      default:
        return
    }

  }

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleAdd() {
    const Value = inputValue.trim()
    if (!Value) return
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: uuidv4(),
          title: inputValue,
          isDone: false
        }
      ]
    })
    setInputValue('')
  }

  function handleDone(id) {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone
          }
        }
        return todo
      })
    })
  }

  function handleDelete(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  function handleChangeEdit(e) {
    setCurrentEdit(e.target.value)
  }

  function toggleIsEdit(id) {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          setCurrentEdit(todo.title)
          return {
            ...todo,
            isEdit: !todo.isEdit
          }
        }
        return todo
      })
    })
  }
  function doneEdit(id, currentEdit) {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
        if (todo.id === id) {

          return {
            ...todo,
            title: currentEdit,
            isEdit: false
          }
        }
        return todo
      })
    })
  }

  function handleKeyUp(id, currentEdit, event) {
    let keyCode = event.keyCode
    if (keyCode === 13) {
      doneEdit(id, currentEdit)
    }
    if (keyCode === 27) {
      toggleIsEdit(id)
    }
  }

  function handleClear() {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => !todo.isDone)
    })
  }

  return (
    <div>
      <Header handleClick={handleClick} />

      <AddTodo
        handleChange={handleChange}
        inputValue={inputValue}
        handleClick={handleClick}
      />

      {
        todos.length !== 0 ?
          <Todos
            todos={todos}
            handleClick={handleClick}
            handleChange={handleChange}
            handleKeyUp={handleKeyUp}
            doneEdit={doneEdit}
            handleChangeEdit={handleChangeEdit}
            currentEdit={currentEdit}

          />
          :
          <div className="noTodos">已無代辦事項</div>
      }

      <Footer
        numOfRemaining={numOfRemaining}
        handleFBLogout={handleFBLogout}
      />
    </div>
  );
}

export default TodoApp;
