import React from 'react'
import {FacebookOutlined, InstagramFilled, InstagramOutlined} from '@ant-design/icons';

function Footer() {
    return (
        
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            backgroundColor:"#02343F"
        }}>
           <span style={{color:'#F0EDCC'}}>Developed by Seungryeol & Minjung</span>
           <div style={{display:'flex'}}>
           <FacebookOutlined style={{color:'#4267B2',padding:'10px'}}/>
           <InstagramOutlined style={{color:'red', padding:'10px'}}/>
           </div>

        </div>
    )
}

export default Footer
