import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
// import ShopPage from "./views/ShopPage/ShopPage.js";
import ClothesPage from "./views/ClothesPage/ClothesPage.js";
import ShoesPage from "./views/ShoesPage/ShoesPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadClothesPage from "./views/UploadClothesPage/UploadClothesPage.js";
import UploadShoesPage from "./views/UploadShoesPage/UploadShoesPage.js";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from "./views/CartPage/CartPage";
import HistoryPage from "./views/HistoryPage/HistoryPage";
import MainPage from "./views/MainPage/MainPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route component={Auth(MainPage, null)} exact path="/" />
          <Route
            component={Auth(ClothesPage, null)}
            exact
            path="/shop/clothes"
          />
          <Route component={Auth(ShoesPage, null)} exact path="/shop/shoes" />
          <Route component={Auth(LoginPage, false)} exact path="/login" />
          <Route component={Auth(RegisterPage, false)} exact path="/register" />
          <Route
            component={Auth(UploadClothesPage, true)}
            exact
            path="/product/upload/clothes"
          />
          <Route
            component={Auth(UploadShoesPage, true)}
            exact
            path="/product/upload/shoes"
          />
          <Route
            component={Auth(DetailProductPage, null)}
            exact
            path="/product/:productId"
          />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
