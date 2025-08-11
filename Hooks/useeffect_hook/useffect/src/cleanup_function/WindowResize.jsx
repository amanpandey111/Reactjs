import React, { useEffect, useState } from 'react';

function WindowResize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach event listener on mount
    window.addEventListener('resize', handleResize);

    // Cleanup function: remove event listener when the component unmounts
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []); // Empty array means this effect runs once, on mount and unmount

  return <h1>Window Width: {windowWidth}</h1>;
}

export default WindowResize;
