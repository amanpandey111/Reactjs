// src/components/NonVirtualizedList.jsx
import React from 'react';
import './List.css'; // We'll create this CSS file

const NonVirtualizedList = ({ items }) => {
  return (
    <div className="list-container">
      <h2>Non-Virtualized List (Renders All {items?.length} Items)</h2>
      <div className="list-content">
        {items?.map((item) => (
          <div key={item.id} className="list-item">
            Item {item.id}: {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonVirtualizedList;