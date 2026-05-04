import { useRef } from 'react';
import useClipBoard from '../hooks/useClipBoard';

const ClipBoard = () => {
    const ref = useRef()
    const {copied, copy} = useClipBoard();
  return (
    <div>
        <button onClick={(e) => copy(ref.current.innerText)} >copy text</button>
        <p ref={ref}>
            this is the text which is intend to be get copied.
        </p>
        {copied && <p>Copied to clipboard</p>}
    </div>
  )
}

export default ClipBoard;
