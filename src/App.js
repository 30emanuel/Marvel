import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Details from "./pages/detailscomic/Details"
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path="/" Component={Shop}></Route>
        <Route path="comic/:id" Component={Details}></Route>
        <Route path="cart" Component={Cart}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
