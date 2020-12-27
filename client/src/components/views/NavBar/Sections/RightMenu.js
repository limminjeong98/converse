/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;


function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
      <SubMenu title="Login">
      <Menu.Item className="subItem" key="mail">
          <a href="/login">Signin</a>
      </Menu.Item>
      <Menu.Item key="app" className="subItem">
          <a href="/register">Signup</a>
      </Menu.Item>
      </SubMenu>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="history" className="history">
        <a href="/history">History</a> 
        </Menu.Item>
        <Menu.Item key="upload" className="upload">
        <a href="/product/upload">Upload</a> 
        </Menu.Item>
        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge className="btnBadge" count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" className="head-example" style={{ marginRight: -22, color: '#F0EDCC' }} >
              <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item key="logout" className="Logout">
        <a onClick={logoutHandler}>Logout</a> 
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

