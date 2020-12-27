import React, {useState} from 'react';
import { Menu } from 'antd';
import { Route, Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



function LeftMenu(props) {
  const salePage = () => {
    props.history.push("/sale")
  }
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="sale" className="sale">
      <a href="/sale">Sale</a> 
    </Menu.Item>
    <Menu.Item key="New Arrivals" className="newArrivals">
      <a href="/">New Arrivals</a> 
    </Menu.Item>
    <SubMenu title="Women">
        <Menu.Item className="subItem" key="setting:1">Outer</Menu.Item>
        <Menu.Item className="subItem" key="setting:2">Top</Menu.Item>
        <Menu.Item className="subItem" key="setting:3">Bottom</Menu.Item>
        <Menu.Item className="subItem" key="setting:4">Shoes</Menu.Item>
        <Menu.Item className="subItem" key="setting:5">Bag</Menu.Item>
    </SubMenu>
    <SubMenu title="Men">
        <Menu.Item className="subItem" key="setting:1">Outer</Menu.Item>
        <Menu.Item className="subItem" key="setting:2">Top</Menu.Item>
        <Menu.Item className="subItem" key="setting:3">Bottom</Menu.Item>
        <Menu.Item className="subItem" key="setting:4">Shoes</Menu.Item>
        <Menu.Item className="subItem" key="setting:5">Bag</Menu.Item>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu