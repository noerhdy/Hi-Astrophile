import IndexForm from "@/pages/Home/IndexForm";
import IndexHome from "@/pages/Home/IndexHome";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<IndexHome />} />
        <Route path="/" element={<IndexHome />} />
        <Route path="/form" element={<IndexForm />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
