
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Error404 from "./pages/Error404";
import BlogPage from "./pages/blogs";
import Forgot_password from './pages/ForgotPassword';
// window.$crisp=[];
// window.CRISP_WEBSITE_ID="e79efdd2-abee-4a1e-b868-c7929585ebd9";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/UMatter" element={<Home />} />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route exact path="/signin/forgotPassword" element={<Forgot_password/>}/>
        <Route path="/*" element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
