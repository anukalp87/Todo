// App.jsx
import React from 'react';
import TodoList from './components/TodoList';
import { useState, useRef } from 'react';

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
    setTodos((prev) => {
      return prev.filter((value) => value.id !== id);
    });
  };

  const updateTodo = (id) => {
    const newData = prompt("Update your task:", "");
    if (newData?.trim() === "") return;

    setTodos((prev) => {
      return prev.map((value) => {
        if (value.id === id) {
          value.text = newData;
        }
        return value;
      });
    });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-y-4 p-4">
      <h1 className="text-xl font-bold text-black mb-4">Todo List</h1>
      <div className="flex gap-x-2 w-full max-w-md">
        <input
          type="text"
          className="h-10 w-full border px-2"
          placeholder="Add a new task"
          ref={inputRef}
        />
        <button
          className="bg-gray-500 text-white h-10 px-4"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div className="h-80 w-full max-w-md bg-white border mt-4 p-4 overflow-y-auto">
        {todos.length > 0 ? (
          todos.map((value) => (
            <TodoList
              text={value.text}
              key={value.id}
              id={value.id}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))
        ) : (
          <p className="text-center">No tasks added yet!</p>
        )}
      </div>
    </div>
  );
};

export default App;
