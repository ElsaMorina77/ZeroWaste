import React from "react";
import DesktopFourteen from "pages/DesktopFourteen";
import DesktopThirteen from "pages/DesktopThirteen";
import DesktopTwelve from "pages/DesktopTwelve";
import DesktopEleven from "pages/DesktopEleven";
import DesktopTen from "pages/DesktopTen";
import DesktopNine from "pages/DesktopNine";
import DesktopEight from "pages/DesktopEight";
import DesktopSeven from "pages/DesktopSeven";
import DesktopSix from "pages/DesktopSix";
import DesktopFive from "pages/DesktopFive";
import DesktopFour from "pages/DesktopFour";
import DesktopThree from "pages/DesktopThree";
import DesktopSeventeen from "pages/DesktopSeventeen";
import DesktopSixteen from "pages/DesktopSixteen";
import DesktopFifteen from "pages/DesktopFifteen";
import DesktopTwo from "pages/DesktopTwo";
import DesktopOne from "pages/DesktopOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesktopOne />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktoptwo" element={<DesktopTwo />} />
        <Route path="/desktopfifteen" element={<DesktopFifteen />} />
        <Route path="/desktopsixteen" element={<DesktopSixteen />} />
        <Route path="/desktopseventeen" element={<DesktopSeventeen />} />
        <Route path="/desktopthree" element={<DesktopThree />} />
        <Route path="/desktopfour" element={<DesktopFour />} />
        <Route path="/desktopfive" element={<DesktopFive />} />
        <Route path="/desktopsix" element={<DesktopSix />} />
        <Route path="/desktopseven" element={<DesktopSeven />} />
        <Route path="/desktopeight" element={<DesktopEight />} />
        <Route path="/desktopnine" element={<DesktopNine />} />
        <Route path="/desktopten" element={<DesktopTen />} />
        <Route path="/desktopeleven" element={<DesktopEleven />} />
        <Route path="/desktoptwelve" element={<DesktopTwelve />} />
        <Route path="/desktopthirteen" element={<DesktopThirteen />} />
        <Route path="/desktopfourteen" element={<DesktopFourteen />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
