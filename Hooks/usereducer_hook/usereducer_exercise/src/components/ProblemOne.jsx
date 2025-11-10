import { useReducer, useEffect } from "react"

function dispatch(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      }

    case "togglePause":
      return {
        ...state,
        isPaused: !state.isPaused
      };

    case "addheart": {
      const keyToCheck = state.count;

      const index = state.likes.findIndex(obj => keyToCheck in obj);

      if (index !== -1) {
        const updatedLikes = state.likes.map((obj, i) => {
          if (i === index) {
            return {
              ...obj,
              [keyToCheck]: obj[keyToCheck] + 1
            };
          }
          return obj;
        });

        return {
          ...state,
          likes: updatedLikes
        };
      } else {
        return {
          ...state,
          likes: [
            ...state.likes,
            {
              [keyToCheck]: 1
            }
          ]
        };
      }
    }

    default:
      return state
  }
}

function ProblemOne() {
  const initialState = {
    count: 0,
    likes: [],
    isPaused: true
  }
  const [stateValues, stateFunc] = useReducer(dispatch, initialState)
  useEffect(() => {
    let setTime = setInterval(() => {
      if (!stateValues.isPaused) {
        stateFunc({ type: "increment" });
      }
    }, 1000)
    return () => clearInterval(setTime)
  }, [stateValues.isPaused])
  console.log(stateValues)
  return (
    <div>
      <h1>Let's Do Exercise on useReducer</h1>
      <h2>Counter : {stateValues.count}</h2>
      <div style={{ display: "flex", gap: 5, justifyContent: 'center' }} >
        <button style={{ padding: 4, cursor: 'pointer' }} onClick={() => stateFunc({ type: "increment" })} >+</button>
        <button style={{ padding: 4, cursor: 'pointer' }} onClick={() => stateFunc({ type: "decrement" })} >-</button>
        <button style={{ padding: 4, cursor: 'pointer' }} onClick={() => stateFunc({ type: "addheart" })} >💖</button>
        <button style={{ padding: 4, cursor: 'pointer' }} onClick={() => stateFunc({ type: "togglePause" })} >||</button>
      </div>
      <div>
        <h2>LIkes</h2>
        {
          stateValues.likes?.map((curEle) => {
            const [key, value] = Object.entries(curEle)[0];
            console.log(key, value)
            return <div>
              <p> Count <strong>{key}</strong> has <strong>{value}</strong> </p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default ProblemOne;
