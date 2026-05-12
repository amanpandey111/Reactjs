import './App.css'
import { useTheme } from './hook/useTheme'
import { useBrand } from './hook/useBrand';
import { useEffect, useState } from 'react';


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const brand = useBrand();
  useEffect(() => {
    if (brand?.name) {
      setIsVisible(true);
    }
  }, [brand]);
  console.log(brand?.name);

  return (
    <>
      <div
        className={`
          p-4
          ${theme ? 'bg-white text-black' : 'bg-black text-white'}
          transition-colors duration-700 ease-in-out
        `}
      >
        <nav className="flex justify-between bg-slate-500 p-4 rounded-md" >
          <h1>My Application</h1>
          <button className='bg-slate-700 text-white px-4 rounded-md cursor-pointer' onClick={toggleTheme} >Toggle</button>
        </nav>

        <main className="mt-4 p-4 border border-slate-300 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Content Area</h2>
          <p className="text-lg leading-relaxed">
            This is the main content of the application. The theme (colors, background)
            changes dynamically based on the current theme state.
          </p>
        </main>
      </div>
      <h2 
      className={`
        text-xl font-bold transition-all duration-700 ease-out
        ${isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-4'}
      `}
    >
      {brand?.name}
    </h2>
    </>
  )
}

export default App
