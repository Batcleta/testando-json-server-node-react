import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Logo from "./components/template/Logo";
import Nav from "./components/template/Nav";
import Footer from "./components/template/Footer";
import Routes from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
