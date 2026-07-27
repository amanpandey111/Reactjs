import { useState } from "react";
import HeavyEmpList from "./HeavyEmpList";

// ❌ Poor Isolation
function EmployeePage() {
  const [searchTerm, setSearchTerm] = useState('');

  // 💥 Every time you type 1 letter:
  // 1. EmployeePage re-renders
  // 2. HeavyEmployeeList re-renders from scratch
  return (
    <div>
      <input 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border"
      />
      <HeavyEmpList />
    </div>
  );
}

export default EmployeePage;
