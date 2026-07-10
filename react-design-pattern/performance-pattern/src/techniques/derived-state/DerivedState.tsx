import { useEffect, useMemo, useState } from "react";

const DerivedState = ({items}) => {

  //! Here you can see you call two react hook to store one value
  // const [total, setTotal] = useState(0);
  // useEffect(() => {
  //   const sum = items.reduce((res, cur) => res += cur.price, 0)
  // }, [items])
  // useEffect(() => {}, [items])
  
  //todo We can simple do in storing in variable
  const total = items.reduce((res, cur) => res+=cur.price, 0)
  const totalMemo = useMemo(() => (items.reduce((res, cur) => res+=cur.price, 0)), [items])
  return (
    <div>DerivedState</div>
  )
}

export default DerivedState;
