// TodoApp.jsx
import React, { useState, useCallback } from 'react';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn useCallback', completed: false },
    { id: 2, text: 'Build Todo App', completed: false }
  ]);
  const [text, setText] = useState('');

  const handleAddTodo = useCallback(()=>{
    if (text.trim() !== '') {
      setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
      setText('');
    }
  },[text])

  const handleComplete = useCallback((id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto text-white bg-gray-800 rounded">
      <h1 className="text-2xl font-bold mb-4">📝 useCallback Todo</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow px-3 py-2 text-white rounded-l"
          placeholder="Add a todo..."
        />
        <button
          onClick={handleAddTodo}
          className="bg-green-500 px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onComplete={handleComplete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
