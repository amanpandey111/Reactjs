// src/components/VirtualizedList.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './List.css'; // Ensure this CSS file exists and is correctly linked

const ITEM_HEIGHT = 50; // pixels, assumed fixed height for simplicity
const VISIBLE_COUNT_BUFFER = 5; // Render a few extra items outside viewport for smooth scrolling

const VirtualizedList = ({ items }) => {
  // Defensive check: Ensure items is an array before proceeding
  // If items is null, undefined, or not an array, default to an empty array
  const safeItems = Array.isArray(items) ? items : [];

  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  // Calculate total height of the virtual list using safeItems
  const totalHeight = safeItems.length * ITEM_HEIGHT;

  // Determine the range of visible items
  const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - VISIBLE_COUNT_BUFFER);
  const endIndex = Math.min(
    safeItems.length - 1, // Use safeItems.length
    Math.ceil((scrollTop + (containerRef.current ? containerRef.current.clientHeight : 0)) / ITEM_HEIGHT) + VISIBLE_COUNT_BUFFER
  );

  // Slice the items array to get only the visible items using safeItems
  const visibleItems = safeItems.slice(startIndex, endIndex + 1);

  // Calculate the top padding to push visible items down correctly
  const paddingTop = startIndex * ITEM_HEIGHT;

  // Calculate the bottom padding to maintain scrollbar size
  // Adjust calculation for correct padding bottom based on safeItems.length
  const paddingBottom = totalHeight - (endIndex + 1) * ITEM_HEIGHT;
  // Ensure paddingBottom doesn't go negative
  const finalPaddingBottom = Math.max(0, paddingBottom);


  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <div className="list-container" ref={containerRef} style={{ height: '400px', overflowY: 'auto' }}>
      <h2>Virtualized List (Renders {visibleItems.length} Visible Items out of {safeItems.length})</h2>
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ paddingTop: paddingTop, paddingBottom: finalPaddingBottom }}>
          {visibleItems.map((item) => (
            <div key={item.id} className="list-item" style={{ height: ITEM_HEIGHT }}>
              Item {item.id}: {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;