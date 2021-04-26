import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import { Row, Col } from "antd";

function DetailProductPage(props) {
  const productId = props.match.params.productId;
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/product/products_by_id?id=${productId}&type=single`)
      .then((response) => {
        console.log("detailproduct useeffect response", response.data[0]);
        setProduct(response.data[0]);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        paddingTop: "1rem",
        paddingBottom: "5rem",
      }}
    >
      <div style={{ width: "100%", padding: "3rem 4rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", padding: "1rem" }}>
            <ProductImage detail={Product} />
          </div>
          <div style={{ width: "100%", padding: "1rem" }}>
            <ProductInfo detail={Product} />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default DetailProductPage;
