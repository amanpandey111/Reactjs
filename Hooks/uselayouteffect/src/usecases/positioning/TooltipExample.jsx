import { useState, useRef, useEffect, useLayoutEffect } from "react";

export default function TooltipExample() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  // 🔁 Try toggling between useEffect and useLayoutEffect
  useLayoutEffect(() => {
  // useEffect(() => {
    if (showTooltip && buttonRef.current) {
      // Artificial delay to simulate heavy computation
      const rect = buttonRef.current.getBoundingClientRect();
      console.log("Calculating tooltip position...");

      setTimeout(() => {
        console.log("Setting tooltip position");
        setTooltipPos({
          top: rect.bottom + 8,
          left: rect.left + rect.width / 2,
        });
      }, 1000); // ⏱️ 1 second delay
    }
  }, [showTooltip]);

  return (
    <div style={{ padding: "100px", textAlign: "center", position: "relative" }}>
      <button
        ref={buttonRef}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Hover me
      </button>

      {showTooltip && tooltipPos && (
        <div
          style={{
            position: "absolute",
            top: tooltipPos.top,
            left: tooltipPos.left,
            transform: "translateX(-50%)",
            background: "black",
            color: "white",
            padding: "8px 12px",
            borderRadius: "6px",
            fontSize: "14px",
            pointerEvents: "none",
          }}
        >
          Tooltip Positioned
        </div>
      )}
    </div>
  );
}
