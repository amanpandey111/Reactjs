import TreeItem from './TreeItem';

const TreeList = ({ menus }) => {
    return (
        <div>
            <ul className='list-disc' >
                {
                    menus.map((curEle,index) => {
                        return <TreeItem key={index} curEle={curEle} />
                    })
                }
            </ul>
        </div>
    )
}

export default TreeList