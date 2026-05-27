import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const Dropdown = () => {
  const [open, setOpen] = useState(true);

  const ref = useRef();

  useClickOutside(ref, () => {
    setOpen(false);
  });

  return (
    <div>
      {open && (
        <div
          ref={ref}
          className="border p-4 w-52"
        >
          Dropdown Content
        </div>
      )}
    </div>
  );
};

export default Dropdown;
