import React from "react";
import { Route, Routes } from 'react-router-dom';

// import Home from "./component/Home/Home";
// import Overview from "./component/About/Overview/Overview";
import Contact2 from "./component/Contact/Contact2";
// import BoardTrustee from "./component/About/Boardtrustee/BoardTrustee";

const mapStyles = {
  width: '100%',
  height: '100%'
};

function App() {
  return (
    <>

      {/* <Overview /> */}
      {/* <Home /> */}
      {/* <BoardTrustee /> */}
      <Contact2 />
      {/* <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/contact" element={<Contact2 />} />
      </Routes> */}

    </>
  );
}

export default App;
