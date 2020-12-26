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
        <Menu.Item className="subItem" key="setting:2">T-shits</Menu.Item>
        <Menu.Item className="subItem" key="setting:3">Dress</Menu.Item>
        <Menu.Item className="subItem" key="setting:4">Bag</Menu.Item>
        <Menu.Item className="subItem" key="setting:5">Accessary</Menu.Item>
    </SubMenu>
    <SubMenu title="Men">
        <Menu.Item className="subItem" key="setting:1">Coat</Menu.Item>
        <Menu.Item className="subItem" key="setting:2">Jacket</Menu.Item>
        <Menu.Item className="subItem" key="setting:3">Pants</Menu.Item>
        <Menu.Item className="subItem" key="setting:4">Bag</Menu.Item>
        <Menu.Item className="subItem" key="setting:5">Accessary</Menu.Item>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu