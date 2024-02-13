import React, { Fragment, useEffect, useState } from "react";
import WebFont from "webfontloader";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Fix: Switch
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import store from "./store";
import { loadUser } from "./actions/userActions";
import { useSelector } from "react-redux";
import Header from "./component/layout/Haeder/Haeder.js";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import ProductDetails from "./component/Product/ProductDetails";
import LoginSignUp from "./component/User/LoginSignUp";
import UserOptions from "./component/layout/Haeder/UserOptions";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import OrderDetails from "./component/Orders/OrderDetails";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Orders/MyOrders.js";
import Dashboard from "./component/admin/Dashboard";
import ProductList from "./component/admin/ProductList.js";
import NewProduct from "./component/admin/NewProduct.js";
import UpdateProduct from "./component/admin/UpdateProduct.js";
import OrderList from "./component/admin/OrderList.js";
import ProcessOrder from "./component/admin/ProcessOrder.js";
import UsersList from "./component/admin/UsersList.js";
import UpdateUser from "./component/admin/UpdateUser.js";
import ProductReviews from "./component/admin/ProductReviews.js";
import About from "./component/layout/About/About.js";
import Contact from "./component/layout/Contact/Contact.js";
import NoteFound from "./component/layout/NoteFound.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
      const { data } = await axios.get("/api/v1/stripeapikey");
      if (data && data.stripeApiKey) {
        setStripeApiKey(data.stripeApiKey);
      } else {
        console.error("Stripe API key not available in the response data.");
      }
    } catch (error) {
      console.error("Error fetching Stripe API key:", error);
    }
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Fragment>
        <Header />
        {isAuthenticated && <UserOptions user={user} />}
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Routes>
              <Route path="/process/payment" element={<Payment />} />
            </Routes>
          </Elements>
        )}{" "}
        {/* Fix: Switch */}
        <Routes>
          <Route path="/account" element={<Profile />} />
          <Route path="/me/update" element={<UpdateProfile />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/password/update" element={<UpdatePassword />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/order/confirm" element={<ConfirmOrder />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            // isAdmin={true}
            path="/admin/dashboard"
            element={<Dashboard />}
          />
          <Route
            // isAdmin={true}
            path="/admin/product"
            element={<ProductList />}
          />

          <Route
            // isAdmin={true}
            path="/admin/products"
            element={<NewProduct />}
          />
          <Route
            // isAdmin={true}
            path="/admin/products/:id"
            element={<UpdateProduct />}
          />
          <Route
            // isAdmin={true}
            path="/admin/orders"
            element={<OrderList />}
          />
          <Route
            // isAdmin={true}
            path="/admin/order/:id"
            element={<ProcessOrder />}
          />
          <Route
            // isAdmin={true}
            path="/admin/users"
            element={<UsersList />}
          />
          <Route
            // isAdmin={true}
            path="/admin/user/:id"
            element={<UpdateUser />}
          />
          <Route
            // isAdmin={true}
            path="/admin/reviews"
            element={<ProductReviews />}
          />

          <Route
            render={() =>
              window.location.pathname === "/process/payment" ? null : (
                <NoteFound />
              )
            }
          />
        </Routes>
        {/* Fix: Switch */}
        <Footer />
      </Fragment>
    </Router>
  );
}
export default App;
