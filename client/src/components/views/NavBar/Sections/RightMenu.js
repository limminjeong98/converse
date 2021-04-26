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

  console.log('props',props)
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
        <SubMenu title="SHOP">
        <Menu.Item className="subItem" key="mail">
            <a href="/shop/clothes">Clothes</a>
        </Menu.Item>
        <Menu.Item className="subItem" key="mail">
            <a href="/shop/shoes">Shoes</a>
        </Menu.Item>
        </SubMenu>
        <SubMenu title="LOGIN" href="/login">
        <Menu.Item className="subItem" key="mail">
            <a href="/login">Sign in</a>
        </Menu.Item>
          <Menu.Item className="subItem" key="mail">
            <a href="/register">Register</a>
          </Menu.Item>
          </SubMenu>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <SubMenu title="SHOP">
        <Menu.Item className="subItem" key="mail">
            <a href="/shop/clothes">Clothes</a>
        </Menu.Item>
        <Menu.Item className="subItem" key="mail">
            <a href="/shop/shoes">Shoes</a>
        </Menu.Item>
        </SubMenu>
        <Menu.Item key="history" className="history">
        <a href="/history">HISTORY</a> 
        </Menu.Item>
        <SubMenu title="UPLOAD">
        {/* <Menu.Item key="upload" className="upload"> */}
        {/* <a href="/product/upload">Upload</a> */}
          <Menu.Item className="subItem" key="mail">
              <a href="/product/upload/clothes">Clothes</a>
          </Menu.Item>
          <Menu.Item className="subItem" key="mail">
              <a href="/product/upload/shoes">Shoes</a>
          </Menu.Item> 
        {/* </Menu.Item> */}
        </SubMenu>
        <Menu.Item key="cart" className="cart" style={{ paddingBottom: 3 }}>
          <Badge className="btnBadge" count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" className="head-example" style={{ marginRight: -22, color: ':#C8C8C7' }} >
              <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item key="logout" className="Logout">
        <a onClick={logoutHandler}>LOGOUT</a> 
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

