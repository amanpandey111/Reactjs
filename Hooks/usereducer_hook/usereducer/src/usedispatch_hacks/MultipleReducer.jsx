// import React, { useReducer } from 'react';

// // Reducers for different parts of the state
// const countReducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const nameReducer = (state, action) => {
//   switch (action.type) {
//     case 'setName':
//       return { name: action.payload };
//     default:
//       return state;
//   }
// };

// // Combining reducers
// const rootReducer = (state, action) => ({
//   count: countReducer(state.count, action),
//   name: nameReducer(state.name, action),
// });

// const MultipleReducer = () => {
//   const [state, dispatch] = useReducer(rootReducer, {
//     count: 0,
//     name: ''
//   });

//   return (
//     <div>
//       <h1>Count: {state.count}</h1>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <h1>Name: {state.name}</h1>
//       <button onClick={() => dispatch({ type: 'setName', payload: 'John' })}>Set Name</button>
//     </div>
//   );
// };

// export default MultipleReducer;


import React, { useReducer } from 'react';

const countReducer = (countState, action) => {
  switch (action.type) {
    case 'increment':
      return countState + 1;
    case 'decrement':
      return countState - 1;
    case 'resetCount':
      return 0;
    default:
      return countState;
  }
};

const nameReducer = (nameState, action) => {
  switch (action.type) {
    case 'setName':
      return action.payload;
    default:
      return nameState;
  }
};

const rootReducer = (state, action) => ({
  count: countReducer(state.count, action),
  name: nameReducer(state.name, action),
});

const MultipleReducer = () => {
  const [state, dispatch] = useReducer(rootReducer, {
    count: 0,
    name: ''
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6">
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Count: {state.count}</h1>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => dispatch({ type: 'increment' })}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch({ type: 'decrement' })}
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch({ type: 'resetCount' })}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-200"
            >
              Reset
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Name: {state.name}</h1>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => dispatch({ type: 'setName', payload: 'John Doe' })}
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200"
            >
              Set Name to 'John Doe'
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleReducer;
