import React from "react";
import {
  Routes,
  Route,
  HashRouter,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import Goods from "./pages/Goods";



function App() {
  return (
    <HashRouter>
      <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/goods' element={<Goods />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App;
