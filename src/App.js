import React from "react";

import "./Components/Button/Button.css";
import "./Components/Background/HomeBackground2.css";
import "./Components/Scroll/scroll.css";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import CreateProfile from "./Pages/CreateProfile";
import Main from "./Pages/Main";
import Error from "./Pages/Error";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Routes>
      {/*<Route path="/*" element={<Navigate to="/PixelHeartWeb" />} />*/}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/CreateProfile" element={<CreateProfile />} />
      <Route path="/Main/*" element={<Main />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default App;
