import React from 'react';

const TodoItem = ({ todo, toggleCompleted }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }
 
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <input type="checkbox" style={styles.checkbox} onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()} className="text-xl font-semibold text-gray-800">{todo.title}</p>
      <p className="text-sm text-gray-600">{todo.date}</p>
    </div>
  );
}
const styles = {
  checkbox: {
    float:'left',
    marginRight: '10px',
    height: '15px',
    width: '15px',
  }
}
export default TodoItem;