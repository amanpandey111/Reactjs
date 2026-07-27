import { useState } from "react";
import HeavyEmpList from "./HeavyEmpList";

// ✅ Isolated Component
function SearchInput({ onSearch }: { onSearch: (val: string) => void }) {
  const [term, setTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value); // State change stays INSIDE SearchInput!
    onSearch(value);
  };

  return <input value={term} onChange={handleChange} className="border" />;
}

// Parent Page
function EmployeePageWithIsolation() {
  const handleSearch = (query: string) => {
    // Filter data here only when needed
    console.log('Got My Value ', query)
  };

  return (
    <div>
      {/* 🟢 Typing here ONLY re-renders SearchInput */}
      <SearchInput onSearch={handleSearch} />
      
      {/* 🟢 HeavyEmployeeList stays untouched while typing */}
      <HeavyEmpList />
    </div>
  );
}

export default EmployeePageWithIsolation;
