import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCartItems,
  removeCartItem,
  onSuccessBuy,
} from "../../../_actions/user_actions";
import { Empty, Result } from "antd";
import Paypal from "../../utils/Paypal";
import "./Sections/UserCardBlock.css";
import { Checkbox, Button } from "antd";

function CartPage(props) {
  const dispatch = useDispatch();

  const [CartItems, setCartItems] = useState([]);
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [ShowSuccess, setShowSuccess] = useState(false);

  const [CheckedItems, setCheckedItems] = useState(CartItems);
  const [Indeterminate, setIndeterminate] = useState(false);
  const [CheckAll, setCheckAll] = useState(true);

  useEffect(() => {
    let cartItems = [];
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });

        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          (response) => {
            calculateTotal(response.payload);
            setCartItems(response.payload);
            setCheckedItems(response.payload);
          }
        );
      }
    }
  }, [props.user.userData]);

  let calculateTotal = (cartDetail) => {
    let total = 0;
    cartDetail.map((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });
    setTotal(total);
    setShowTotal(true);
  };

  let removeFromCart = (productId, productSize, productColor) => {
    dispatch(removeCartItem(productId, productSize, productColor)).then(
      (response) => {
        if (response.payload.productInfo.length <= 0) {
          setShowTotal(false);
        }
      }
    );
  };

  const transactionSuccess = (data) => {
    dispatch(
      onSuccessBuy({
        paymentData: data,
        cartDetail: props.user.cartDetail,
      })
    ).then((response) => {
      if (response.payload.success) {
        setShowTotal(false);
        setShowSuccess(true);
      }
    });
  };

  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const onCheckboxChange = (item) => {
    const currentIndex = CheckedItems.indexOf(item);
    const newCheckedItems = [...CheckedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }

    setCheckedItems(newCheckedItems);
    calculateTotal(newCheckedItems);
    setIndeterminate(
      !!newCheckedItems.length && newCheckedItems.length < CartItems.length
    );
    setCheckAll(newCheckedItems.length === CartItems.length);
  };

  const onCheckAllChange = (event) => {
    const newCheckedItems = event.target.checked
      ? CartItems.map((product, index) => product)
      : [];
    setCheckedItems(newCheckedItems);
    calculateTotal(newCheckedItems);
    setIndeterminate(false);
    setCheckAll(event.target.checked);
  };

  const renderItems = () =>
    CartItems &&
    CartItems.map((product, index) => (
      <tr key={index}>
        <td style={{ textAlign: "center" }}>
          <Checkbox
            value={product}
            onChange={() => onCheckboxChange(product)}
            checked={CheckedItems.indexOf(product) === -1 ? false : true}
          ></Checkbox>
        </td>
        <td style={{ textAlign: "center" }}>
          <img
            style={{ width: "70px" }}
            alt="product"
            src={renderCartImage(product.images)}
          />
        </td>
        <td style={{ textAlign: "center" }}>{product.quantity + "EA"}</td>
        <td style={{ textAlign: "center" }}>{product.price + "원"}</td>
        <td style={{ textAlign: "center" }}>{product.size}</td>
        <td style={{ textAlign: "center" }}>{product.color}</td>
        <td style={{ textAlign: "center" }}>
          <Button
            onClick={() =>
              removeFromCart(product.id, product.size, product.color)
            }
          >
            Remove
          </Button>
        </td>
      </tr>
    ));

  const userCardBlock = () => (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>
              <Checkbox
                indeterminate={Indeterminate}
                onChange={onCheckAllChange}
                checked={CheckAll}
                defaultChecked={true}
              ></Checkbox>
            </th>
            <th style={{ textAlign: "center" }}>Product Image</th>
            <th style={{ textAlign: "center" }}>Product Quantity</th>
            <th style={{ textAlign: "center" }}>Product Price</th>
            <th style={{ textAlign: "center" }}>Product Size</th>
            <th style={{ textAlign: "center" }}>Product Color</th>
            <th style={{ textAlign: "center" }}>Remove from Cart</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "white",
        paddingTop: "1rem",
        paddingBottom: "5rem",
      }}
    >
      <div style={{ width: "85%", minHeight: "16rem", margin: "3rem auto" }}>
        <h1>My Cart</h1>

        <div>{CartItems && userCardBlock()}</div>

        {ShowTotal ? (
          <div style={{ marginTop: "3rem" }}>
            <h2>Total Amount: {Total}원</h2>
          </div>
        ) : ShowSuccess ? (
          <Result status="success" title="Successfully Purchased Items" />
        ) : (
          <>
            <br />
            <br />
            <Empty description={false} />
          </>
        )}

        {ShowTotal && <Paypal total={Total} onSuccess={transactionSuccess} />}
      </div>
    </div>
  );
}

export default CartPage;
