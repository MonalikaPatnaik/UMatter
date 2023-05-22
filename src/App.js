import React from 'react';  
import './App.css';       
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Error404 from './pages/Error404';
// window.$crisp=[];
// window.CRISP_WEBSITE_ID="e79efdd2-abee-4a1e-b868-c7929585ebd9";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signin" element={<SigninPage/>}/>
        <Route path='/*' element = {<Error404/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;