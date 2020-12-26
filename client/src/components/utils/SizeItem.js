import React from 'react'
import { Button, Input } from 'antd';
const SizeItem = ({id, onClick}) => {
    return(
        <div style={{margin: '10px'}}>
            
            <Input style={{width: '50%', marginRight: '10px'}} value={id} />
            <Button onClick={()=>onClick(id)}>삭제</Button>
        </div>
    )
}

export default SizeItem