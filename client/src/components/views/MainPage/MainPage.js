import React from 'react';
import './MainPage.css';
import Lion from './Lion';
import { Button } from 'antd';

const MainPage = () => {

    const setClass = (e) => {
        console.log(e)
    }
    return (
        <div>
            <Button className="btn" type="primary" shape="round" size="large"><a href="/sale">
            Go to Online Shop
            </a>
            </Button>
            <Lion></Lion>
        </div>
    );
};

export default MainPage;