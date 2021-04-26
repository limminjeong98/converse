import React, { useState, useEffect } from "react";
import { Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../_actions/user_actions";
const { Option } = Select;

function ProductInfo(props) {
  const dispatch = useDispatch();

  const [Size, setSize] = useState("SIZE");
  const [Color, setColor] = useState("COLOR");

  const sizeChangeHandler = (value) => {
    setSize(value);
  };

  const colorChangeHandler = (value) => {
    setColor(value);
  };

  const SelectSize = () => {
    if (props.detail.sizes) {
      return (
        <div>
          <Select
            value={Size}
            style={{ width: 150 }}
            name="size"
            onChange={sizeChangeHandler}
          >
            {props.detail.sizes.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
      );
    } else {
      return <></>;
    }
  };

  const SelectColor = () => {
    if (props.detail.colors) {
      return (
        <div>
          <Select
            value={Color}
            style={{ width: 150 }}
            name="color"
            onChange={colorChangeHandler}
          >
            {props.detail.colors.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
      );
    } else {
      return <></>;
    }
  };

  const clickHandler = () => {
    dispatch(
      addToCart(
        props.detail._id,
        Size,
        Color,
        props.detail.price,
        props.detail.images
      )
    );
    alert("장바구니에 추가되었습니다.");
  };

  return (
    <div>
      <h1>{props.detail.title}</h1>
      <p>{props.detail.description}</p>
      <br />
      <h3>{`${props.detail.price}원`}</h3>
      <br />
      <h3>색상</h3>
      <SelectColor />
      <br />
      <h3>사이즈</h3>
      <SelectSize />
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button size="large" shape="round" type="danger" onClick={clickHandler}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
