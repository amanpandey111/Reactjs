import { useState, useEffect, useRef } from 'react';

function ScrollTrackerWith() {
  const [scrollCount, setScrollCount] = useState(0);
  
  // Lock state aur Timeout ID ko track karne ke liye Refs
  const isThrottled = useRef(false);
  const timeoutId = useRef<null | number>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Agar lock laga hai (isThrottled = true), to event ko ignore karo
      if (isThrottled.current) return;

      // 2. Agar lock nahi hai, to kaam karo!
      setScrollCount((prev) => prev + 1);
      console.log("🚀 Throttled: Scroll event executed!");

      // 3. Kaam hote hi lock laga do
      isThrottled.current = true;

      // 4. 200ms ke baad lock ko kholo aur timer ID ko saaf karo
      timeoutId.current = setTimeout(() => {
        isThrottled.current = false;
        timeoutId.current = null;
      }, 2000); // 2000 milliseconds ka gap
    };

    window.addEventListener('scroll', handleScroll);

    // CLEANUP: Agar user page badle, to listener aur bacha-khucha timer dono delete karo
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <div style={{ height: '2000px', padding: '20px' }}>
      <div style={{ position: 'fixed', top: '20px', right: '20px', background: '#e8f5e9', padding: '15px', borderRadius: '8px' }}>
        <h3>🎯 With Throttling (200ms)</h3>
        <p>Scroll Event Kitni Baar Chala: <strong>{scrollCount}</strong></p>
        <p style={{fontSize: '12px', color: 'green'}}>Ab ye control me chalega, chahe jitna tezi se scroll karo!</p>
      </div>
    </div>
  );
}

export default ScrollTrackerWith;