import React from 'react';
import { useTodos } from '../App';

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useTodos();

  const getTodoTitleStyle = () => {
    if (todo.completed) {
      return { textDecoration: 'line-through' };
    } else {
      return { textDecoration: 'none' };
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <input
        type="checkbox"
        style={styles.checkbox}
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()} className="text-xl font-semibold text-gray-800">{todo.title}</p>
      <p className="text-sm text-gray-600">{todo.date}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>x</button>
    </div>
  );
};

const styles = {
  checkbox: {
    float: 'left',
    marginRight: '10px',
    height: '15px',
    width: '15px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    float: 'right',
    marginTop: '-40px',
  },
};

export default TodoItem;
