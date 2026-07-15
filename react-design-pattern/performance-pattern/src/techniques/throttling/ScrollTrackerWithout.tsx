import { useState, useEffect } from 'react';

function ScrollTrackerWithout() {
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Yeh har ek pixel scroll par chalega!
      setScrollCount((prev) => prev + 1);
      console.log("Without Throttle: Scroll event fired!");
    };

    // Window par scroll listener lagaya
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Jab component unmount ho, listener hata do
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '2000px', padding: '20px' }}>
      <div style={{ position: 'fixed', top: '20px', left: '20px', background: '#ffebee', padding: '15px', borderRadius: '8px' }}>
        <h3>🚨 Without Throttling</h3>
        <p>Scroll Event Kitni Baar Chala: <strong>{scrollCount}</strong></p>
        <p style={{fontSize: '12px', color: 'red'}}>Niche scroll karke dekho, ye number rocket ki tarah bhagega!</p>
      </div>
    </div>
  );
}

export default ScrollTrackerWithout;