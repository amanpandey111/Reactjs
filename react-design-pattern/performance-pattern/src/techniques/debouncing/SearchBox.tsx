import { useEffect, useState } from "react"
import useDebounce from "./useDebounce"

const SearchBox = () => {
  const [query, setQuery] = useState('')
  const debounceQuery = useDebounce(query, 600)
  useEffect(() => {
    if(!debounceQuery.trim()) return
    console.log('Calling Api for', debounceQuery)
  }, [debounceQuery])
  return (
    <div className="border px-5 py-3">
      <p>We Will be Learning De-bounce Technique Here</p>
      <input
        type="text"
        className="border rounded-[5px]"
        placeholder="Search Employee"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchBox;
