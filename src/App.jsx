import React, { useState } from 'react';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      date: 'Senin, 21 Mei 2024',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      date: 'Senin, 21 Mei 2024',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      date: 'Senin, 21 Mei 2024',
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='mx-32 mt-10 p-20 bg-purple-400 rounded-xl'>
      <h1 className='mb-5 text-white font-bold text-xl border-b-2'>My Todo List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
