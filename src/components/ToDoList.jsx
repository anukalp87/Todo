// TodoList.jsx
import React from 'react';

const TodoList = ({ text, id, deleteTodo, updateTodo }) => {
  return (
    <div className="flex gap-x-2 h-12 w-full mb-2 p-2 rounded-lg bg-gray-100 shadow-md hover:bg-gray-200 transition">
      <input
        type="text"
        className="flex-grow h-full bg-transparent px-3 py-1 text-gray-800 border-none outline-none rounded-lg focus:ring-2 focus:ring-blue-300"
        value={text}
        readOnly
      />
      <button
        className="bg-green-500 text-white px-3 rounded-lg hover:bg-green-600 transform hover:scale-105 transition"
        onClick={() => updateTodo(id)}
      >
        Update
      </button>
      <button
        className="bg-red-500 text-white px-3 rounded-lg hover:bg-red-600 transform hover:scale-105 transition"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoList;
