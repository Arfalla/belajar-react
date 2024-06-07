import React, { useState } from 'react';
import { useTodos } from '../App';

const getCurrentDate = () => {
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return new Date().toLocaleDateString('id-ID', options);
};

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodos(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Harap isi todo terlebih dahulu");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      date: getCurrentDate(),
      completed: false,
    };

    addTodo(newTodo); // 
    setTitle(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded-md"
          placeholder="Tuliskan Todo Kamu"
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-5 py-2 rounded-md">
        Tambahkan Todo
      </button>
    </form>
  );
};

export default TodoForm;
