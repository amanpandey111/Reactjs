import { IoCartOutline } from "react-icons/io5";

const ProductHeader = () => {
  return (
    <div className='flex justify-between items-center' >
      <div className='flex flex-col gap-1' >
        <p className='text-5xl font-bold text-white' >Premium Store</p>
        <p className='text-white' >Discover our exclusive collection of premium products</p>
      </div>
      <div className='text-white text-5xl rounded-full' >
        <IoCartOutline/>
      </div>
    </div>
  )
}

export default ProductHeader