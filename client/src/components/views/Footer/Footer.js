import React from "react";
import {
  FacebookOutlined,
  InstagramFilled,
  InstagramOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        bottom: 0,
        alignItems: "left",
        justifyContent: "center",
        fontSize: "0.8rem",
        backgroundColor: "#0E1106",
        padding: "1rem",
      }}
    >
      <div style={{ color: "#C8C8C7" }}>
        <br />
        Company Info: CONVERSE Korea ⓒ2021
        <br />
        {/* Developer Info: Minjeong Lim
                <br /> */}
        Developer Contact: limminjeong98@naver.com
        <br />
        <br />
      </div>
    </div>
  );
}

export default Footer;
