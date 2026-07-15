import { useEffect, useMemo, useRef, useState } from "react"
import { users } from "../users"
import useDebounce from "./useDebounce"
import useThrottle from "./useThrottle"

const Dashboard = () => {
  const [text, setText] = useState('')
  const { inputText } = useDebounce(text)
  const scrollContainerRef = useRef(null)
  const { curPosition } = useThrottle(scrollContainerRef)

  useEffect(() => {
    console.log('debounce', inputText)
  }, [inputText])

  const filteredUser = useMemo(() => {
    if (!inputText.trim()) return users
    const lowerCaseSearch = inputText.toLowerCase();
    return users.filter((u) =>
      u.department?.toLowerCase().includes(lowerCaseSearch) ||
      u.name?.toLowerCase().includes(lowerCaseSearch)
    );
  }, [inputText])
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border px-3 py-2 w-[80%] h-225 flex flex-col">
        <p className="text-center font-bold">Dashobard To Implement De-bouncing and Throttling</p>
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Search Department"
            className="border w-50 my-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <p>The Scroll posotion : {curPosition}</p>
        </div>
        <div
          ref={scrollContainerRef}
          className="overflow-y-auto flex flex-col gap-1 border p-2"
        >
          {
            filteredUser.map((u) => (
              <div key={u.id} className="flex gap-2 border rounded-[3px] px-2">
                <p>ID: {u.id}</p>
                <p>Name: {u.name}</p>
                <p>Email: {u.email}</p>
                <p>Department: {u.department}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard