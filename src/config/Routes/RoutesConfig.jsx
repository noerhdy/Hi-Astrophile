import EndPage from "@/pages/Home/EndPage";
import IndexForm from "@/pages/Home/IndexForm";
import IndexHome from "@/pages/Home/IndexHome";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import EndPage2 from "@/pages/Home/EndPage2";

const RoutesConfig = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route index element={<IndexHome />} />
        <Route path="/" element={<IndexHome />} />
        <Route path="/v1" element={<IndexForm />} />
        <Route path="/end" element={<EndPage2 />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
