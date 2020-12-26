import React from 'react'
import { Button, Input } from 'antd';
const ColorItem = ({id, onClick}) => {
    return(
        <div>
            
            <Input style={{width: '50%'}} value={id} />
            <Button onClick={()=>onClick(id)}>삭제</Button>
        </div>
    )
}

export default ColorItem