import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import TreeList from './TreeList';

const TreeItem = ({curEle}) => {
    const [displayChild, setDisplayChild] = useState({})
    // console.log(curEle.children);
    function handleDisplayChild(label){
        // console.log(label);
        setDisplayChild((prev)=>(
            {
                [label] : !prev[label]
            }
        ))
    }
    // console.log(displayChild[curEle.label]);
    // console.log(displayChild.curEle.label);
    let lengthChild = curEle && curEle?.children && curEle?.children?.length > 0
    let isDisplayChild = displayChild[curEle.label]
  return (
    <div>
        <li>
            <div className='flex' >
                <span>{curEle.label}</span>
                {
                    lengthChild && <span className='cursor-pointer'
                onClick={()=>handleDisplayChild(curEle.label)}
                >{isDisplayChild ? <FaMinus/> : <FaPlus/> }</span>
                }
            </div>
            {
                lengthChild && isDisplayChild && <div>
                    <TreeList menus={curEle.children} />
                </div>
            }
        </li>
    </div>
  )
}

export default TreeItem