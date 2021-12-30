import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/home/Home";
import UserCrud from "./components/user/userCrud";

function ROutes(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/users" element={<UserCrud />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default ROutes;
