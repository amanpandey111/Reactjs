import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren((prev) => ({
      ...prev,
      [getCurrentLabel]: !prev[getCurrentLabel],
    }));
  }
  console.log(displayCurrentChildren,displayCurrentChildren[item.label]);

  const hasChildren = item && item.children && item.children.length > 0;
  const isExpanded = displayCurrentChildren[item.label];

  return (
    <li className="list-container" >
      <div className="flex">
        <p>{item.label}</p>
        {hasChildren && (
          <span className="cursor-pointer" onClick={() => handleToggleChildren(item.label)}>
            {isExpanded ? <FaMinus /> : <FaPlus />}
          </span>
        )}
      </div>
      {
        // Only render the child MenuList if it has children AND isExpanded is true
        hasChildren && isExpanded ? <MenuList list={item.children} /> : null
      }
    </li>
  );
}