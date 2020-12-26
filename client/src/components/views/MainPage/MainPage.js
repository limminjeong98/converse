import React from 'react';
import './MainPage.css';
import Lion from './Lion';
import { Button } from 'antd';

const MainPage = () => {
    // const hello = setInterval(function(){
    //     console.log("hi")
    // },3000)
    // const handleToggle = () => {
    //     if(className === "hair"){
    //         hello
    //     }
    // }
    const setClass = (e) => {
        console.log(e)
    }
    return (
        <div>
            <Lion></Lion>
            <Button className="btn" type="primary" shape="round" size="large"><a href="/">
            Go to Online Shop
            </a>
            </Button>
        </div>
    );
};

export default MainPage;