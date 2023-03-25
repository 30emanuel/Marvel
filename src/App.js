import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Details from "./pages/detailscomic/Details"

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" Component={Shop}></Route>
        <Route path="comic/:id" Component={Details}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
