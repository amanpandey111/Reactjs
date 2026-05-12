import { useEffect, useState } from "react";
import { BrandContext } from "../context"
// import
const BrandProvider = ({children}) => {
  const [brand, setBrand] = useState(null);
  useEffect(() => {
    const brand = { name: 'Yantra Enterprises', color: 'orange' }
    setBrand(brand);
  }, [])
  console.log(brand);
    return (
        <BrandContext value={brand}>
          {children}
        </BrandContext>
    )
};

export default BrandProvider
