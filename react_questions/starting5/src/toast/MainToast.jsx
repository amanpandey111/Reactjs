import { useEffect, useState } from "react";
import './toast.css'
import MiniToasts from "./MiniToasts";

function MainTost() {
  const [myToasts, setMyToasts] = useState([])
  function addToast(name) {
    setMyToasts((prev) => ([...prev, { id: Date.now(), name: name, closing: false, }]))
  }

  useEffect(() => {
    if (myToasts.length === 0) return;

    const myTimeStart = setInterval(() => {
      console.log("Interval executes");

      setMyToasts(prev => {
        if (prev.length === 0) return prev;

        const first = prev[0]

        const arr = prev.map((t, i)=>
        t.id === first.id ? { ...t, closing: true } : t
        )
        setTimeout(()=>{
          setMyToasts(p=>p.filter((t,i) => t.id !== first.id));
        },500);

        return arr;
      });

    }, 4000);

    return () => clearInterval(myTimeStart);
  }, [myToasts.length]);

  return (
    <div className="mainToast" >
      <div>
        <button onClick={() => addToast("Success Toast")} >Success Toast</button>
        <button onClick={() => addToast("Warning Toast")} >Warning Toast</button>
        <button onClick={() => addToast("Error Toast")} >Error Toast</button>
        <button onClick={() => addToast("Info Toast")} >Info Toast</button>
      </div>
      <div>
        <MiniToasts myToasts={myToasts} />
      </div>
    </div>
  )
}

export default MainTost;
