import React from 'react'
import TodoItem from './TodoItem' 

const Todos = ({ todos, toggleCompleted }) => {
  return (
    <div>
     {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            // Teruskan function toggleCompleted ke component TodoItem
            toggleCompleted={toggleCompleted}
          />
        )
      })}
    </div>
  )
}

export default Todos