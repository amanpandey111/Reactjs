import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

const INCREMENT = 'index/increment'
const DECREMENT = 'index/decrement'

const DisplayImage = ({ page, indexVisible, setIndexVisible }) => {

  function handleIndexValue(val) {
    if (val === INCREMENT) {
      setIndexVisible((prev) => {
        if (prev >= page.length - 1) {
          return 0
        } else {
          return prev + 1
        }
      })
    } else if (val === DECREMENT) {
      setIndexVisible((val) => {
        if (val === 0) {
          return page.length - 1
        } else {
          return val - 1
        }
      })
    }
  }

  return (
    <div>
      <div className="image-container">
        {
          page.map((curEle, i) => {
            return i === indexVisible && <img className="fade-image" key={i} src={curEle.image} alt="" style={{ visibility: i === indexVisible ? '' : 'hidden' }} />
          })
        }
      </div>
      <div>
        <button onClick={() => handleIndexValue(DECREMENT)} ><FaLessThan /></button>
        {
          page.map((_, i) => {
            return <button key={i} onClick={() => setIndexVisible(i)}
            style={{ backgroundColor: i===indexVisible && 'black', color: i===indexVisible && 'white'   }}
            >{i}</button>
          })
        }
        <button onClick={() => handleIndexValue(INCREMENT)} ><FaGreaterThan /></button>
      </div>
    </div>
  )
}

export default DisplayImage
