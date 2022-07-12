import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "./component/Home/Home";
import Contact2 from "./component/Contact/Contact2";

function App() {
  return (
    <>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/contact" element={<Contact2 />} />
      </Routes>

    </>
  );
}

export default App;
