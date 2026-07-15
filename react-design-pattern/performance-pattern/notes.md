## In this We Will only cover the performance pattern in react
-- The Less component re-render the more the performance
[] What is re-render and when it happens ?

## Techniques
# 1.Memoization
# 2.derived-state
# 3.debouncing
# 4.Throttling

### TASKS ###
const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <Child onClick={() => console.log("Child clicked")} />
    </>
  );
}

Task:
Make sure <Child> renders only once even after repeatedly clicking Increment.
Explain why it was re-rendering before.
Fix it using useCallback.