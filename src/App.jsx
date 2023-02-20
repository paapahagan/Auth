import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthDetails from "./components/AuthDetails";

import Login from "./components/Login";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="SignUp" element={<SignUp />}></Route>
        <Route path="Login" element={<Login />}></Route>
      </Routes>
      <AuthDetails />
    </>
  );
}

export default App;
