// TodoItem.jsx
import React from 'react';

const TodoItem = React.memo(({ todo, onComplete }) => {
  console.log(`Rendering Todo: ${todo.text}`);

  return (
    <li className="flex justify-between items-center mb-2 bg-gray-700 p-2 rounded">
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.text}
      </span>
      <button
        onClick={() => onComplete(todo.id)}
        className="bg-blue-500 px-3 py-1 text-sm rounded"
      >
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
    </li>
  );
});

export default TodoItem;
