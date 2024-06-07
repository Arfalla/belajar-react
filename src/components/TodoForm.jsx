import React, { useState } from 'react';

// Fungsi untuk mendapatkan tanggal saat ini dalam format tertentu
const getCurrentDate = () => {
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return new Date().toLocaleDateString('id-ID', options);
};

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please fill in the title");
      return;
    }

    // Membuat todo baru dengan tanggal saat ini
    const newTodo = {
      id: Date.now(),
      title,
      date: getCurrentDate(), // Tanggal diisi otomatis
      completed: false,
    };

    addTodo(newTodo); // Panggil fungsi addTodo dari props
    setTitle(''); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded-md"
          placeholder="Masukkan Todo Kamu"
        />
      </div>
      <button type="submit" className="bg-green-500 text-white p-2 rounded-md">
        Tambahkan Todo
      </button>
    </form>
  );
};

export default TodoForm;
