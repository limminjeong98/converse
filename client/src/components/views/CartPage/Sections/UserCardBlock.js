import React, { useEffect, useState } from "react";
import "./UserCardBlock.css";
import { Checkbox, Button } from "antd";
// import { use } from '../../../../../../server/routes/product';

function UserCardBlock(props) {
  console.log("usercardblock", props.products);

  useEffect(() => {}, [props]);

  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const CheckboxGroup = Checkbox.Group;

  const allProducts = props.products;
  let allProductList = [];
  console.log("allProducts", allProducts);
  if (allProducts) {
    allProductList = allProducts.map((item, index) => index);
  }

  const [CheckedItems, setCheckedItems] = useState(allProductList);
  const [Indeterminate, setIndeterminate] = useState(true);
  const [CheckAll, setCheckAll] = useState(false);

  const onCheckboxChange = (value) => {
    const currentIndex = CheckedItems.indexOf(value);
    console.log("CheckedItems", CheckedItems);
    console.log("currentIndex", currentIndex);

    const newCheckedItems = [...CheckedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(value);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }
    setCheckedItems(newCheckedItems);
    console.log("CheckedItems", CheckedItems);

    setIndeterminate(
      !!CheckedItems.length && CheckedItems.length < props.products.length
    );
    setCheckAll(CheckedItems.length === props.products.length);
  };

  const onCheckAllChange = (event) => {
    setCheckedItems(
      event.target.checked ? props.products.map((product, index) => index) : []
    );
    setIndeterminate(false);
    setCheckAll(event.target.checked);
    console.log("CheckedItems", CheckedItems);
  };

  const renderItems = () =>
    props.products &&
    props.products.map(
      (product, index) =>
        // if(product.images && product.quantity && product.price && product.size && product.color){
        product.images &&
        product.quantity &&
        product.price &&
        product.size &&
        product.color && (
          <tr key={index}>
            <td style={{ textAlign: "center" }}>
              <Checkbox
                value={index}
                onChange={() => onCheckboxChange(index)}
                checked={CheckedItems.indexOf(index) === -1 ? false : true}
              ></Checkbox>
            </td>
            <td style={{ textAlign: "center" }}>
              <img
                style={{ width: "70px" }}
                alt="product"
                src={renderCartImage(product.images)}
              />
            </td>
            <td style={{ textAlign: "center" }}>{product.quantity + " EA"}</td>
            <td style={{ textAlign: "center" }}>{product.price + " 원"}</td>
            <td style={{ textAlign: "center" }}>{product.size}</td>
            <td style={{ textAlign: "center" }}>{product.color}</td>
            <td style={{ textAlign: "center" }}>
              <Button onClick={() => props.removeItem(product._id)}>
                Remove
              </Button>
            </td>
          </tr>
        )
    );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>
              <Checkbox
                indeterminate={Indeterminate}
                onChange={onCheckAllChange}
                checked={CheckAll}
                defaultChecked={false}
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
}

export default UserCardBlock;
