import './App.css'
import VirtualizedList1 from './components/VirtualizedList1'
import VirtualizedListOptimized from './components/VirtualizedListOptimized'

function App() {
  return (
    <>
      {/* <VirtualizedList1 numberOfItems={500} /> */}
      <VirtualizedListOptimized numberOfItems={1000000} />
    </>
  )
}

export default App
