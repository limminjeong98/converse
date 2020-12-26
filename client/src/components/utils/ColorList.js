import React from 'react'
import ColorItem from './ColorItem';

const ColorList = ({list, ondelete}) => {
    return(
        <div>
            {Object.values(list).map(
                item=>
            <SizeItem id={item} onClick={ondelete}/>
            
            )}
        </div>
    )
}

export default ColorList