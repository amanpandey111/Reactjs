import React from 'react'
import menus from './data'
import TreeList from './TreeList';

const MainTree = () => {
  return (
    <div>
        {
            menus?.length > 0 && <TreeList menus={menus} />
        }
    </div>
  )
}

export default MainTree