import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Acortar from "./pages/Acortar";
import CodigoQR from "./pages/CodigoQR";
import NotFound from "./pages/NotFound";
import { Historial } from "./pages/Historial";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Acortar />}></Route>
        <Route path="/historial" element={<Historial />}></Route>
        <Route path="/codigoqr" element={<CodigoQR />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
