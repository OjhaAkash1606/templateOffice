import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "./component/Home/Home";
import Overview from "./component/About/Overview/Overview";
import Contact2 from "./component/Contact/Contact2";
import BoardTrustee from "./component/About/Boardtrustee/BoardTrustee";
import OtherActivity from "./component/Activity/OtherActivity/OtherActivity";
import PermanentActivity from "./component/Activity/PermanentActivity/PermanentActivity";
// import Blog from "./component/Home/Blog";
import BlogNav from "./component/Blog/Blog/Blog";
import Story from "./component/Blog/Story/Story";
import MediaEvent from "./component/Media/Event/MediaEvent";
import Career from "./component/Career/Career";
import MediaCoverage from "./component/Media/MediaCoverage/MedaiCoverage";

function App() {
  return (
    <>

      {/* <Overview /> */}
      {/* <News /> */}
      {/* <Home /> */}
      {/* <OtherActivity /> */}
      {/* <PermanentActivity /> */}
      {/* <BlogNav /> */}
      {/* <Story /> */}
      {/* <MediaEvent /> */}
      {/* <MediaCoverage /> */}
      {/* <Career /> */}
      <BoardTrustee />
      {/* <Contact2 /> */}
      {/* <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/contact" element={<Contact2 />} />
      </Routes> */}

    </>
  );
}

export default App;
