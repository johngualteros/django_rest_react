import React from "react";
import ReactDOM from "react-dom/client";
import CompanyList from "./components/Company/CompanyList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CompanyForm from "./components/Company/CompanyForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<CompanyList />} />
      <Route path="/companyForm" element={<CompanyForm />} />
      <Route path="/updateCompany/:id" element={<CompanyForm />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
