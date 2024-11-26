import React from "react";
import TodoList from "./components/TodoList";
import { useState, useRef } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const addTodo = () => {
    const data = inputRef.current?.value?.trim();
    if (!data) return;
    const todo = {
      text: data,
      id: Date.now(),
      inCompleted: false,
    };
    setTodos([...todos, todo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    const newData = prompt("Update your task:", "");
    if (newData?.trim() === "") return;

    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newData } : todo))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex justify-center items-center p-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg p-8 relative">
        {/* Animated Circular Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>

        {/* Header */}
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-8">
          🚀 Todo List
        </h1>

        {/* Input Section */}
        <div className="flex gap-4 items-center">
          <input
            type="text"
            ref={inputRef}
            className="flex-1 h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
            placeholder="Add a new task"
          />
          <button
            onClick={addTodo}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="mt-8 space-y-4 overflow-y-auto h-72 border-t pt-4">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-200"
              >
                <span className="text-lg font-medium text-gray-700">
                  {todo.text}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateTodo(todo.id)}
                    className="text-sm bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No tasks added yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
