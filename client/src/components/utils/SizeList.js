import React from 'react'
import SizeItem from './SizeItem';

const SizeList = ({list, ondelete}) => {
    return(
        <div>
            {Object.values(list).map(
                item=>
            <SizeItem id={item} onClick={ondelete}/>
            
            )}
        </div>
    )
}

export default SizeList