import { useEffect } from "react";

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    console.log('Hello World');
    const handleClick = (event) => {
        console.log('object');
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    };

    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClick
      );
    };
  }, [ref, callback]);
};

export default useClickOutside;
