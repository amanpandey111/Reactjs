import useToggle from '../hooks/useToggle'
const ThemeSwitcher = () => {
    const [isDark, toggleTheme] = useToggle(false)
  return (
    <div
      className='w-20 h-8 bg-red-400 border rounded-full cursor-pointer border-white-800'
      onClick={toggleTheme}
    >
        <div
          className={
            `
            w-10 h-full bg-green-600 rounded-full
            transition-transform duration-600
            ${isDark ? 'translate-x-10' : 'translate-x-0'}
            `
          }
        ></div>
    </div>
  )
}

export default ThemeSwitcher;
