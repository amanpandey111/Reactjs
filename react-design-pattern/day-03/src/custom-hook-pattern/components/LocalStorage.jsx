import useLocalStorage from "../hooks/useLocalStorage"

const LocalStorage = () => {
    const [user, setUser] = useLocalStorage('user', 'aman pandey')
    console.log('user is ', user);
  return (
    <div className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-bold">Local Storage</h1>
        <input className="border border-black p-2" value={user} onChange={(e) => setUser(e.target.value)} />
        <button onClick={() => setUser('')} className="border border-black p-2 bg-red-500 text-white rounded cursor-pointer">clear user</button>
    </div>
  )
}

export default LocalStorage;
