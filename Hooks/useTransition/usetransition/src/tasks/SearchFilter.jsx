import { useState, useTransition } from "react";

export default function SearchFilter() {
  // Create dummy big data (10,000 items)
  const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState(bigList);

  // useTransition
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;
    setSearch(value); // urgent update (typing should not lag)

    // defer heavy filtering
    startTransition(() => {
      const result = bigList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredList(result);
    });
  }

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
        className="border border-gray-400 rounded px-3 py-2 w-64"
      />

      {isPending && <p className="text-blue-500">Filtering results...</p>}

      <ul className="mt-4 max-h-96 overflow-y-scroll border p-2">
        {filteredList.map((item) => (
          <li key={item} className="p-1 border-b">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
