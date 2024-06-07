import React from 'react';
import TodoItem from './TodoItem';
import { useTodos } from '../App'; 

const Todos = () => {
  const { todos, toggleCompleted, deleteTodo } = useTodos(); 

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
