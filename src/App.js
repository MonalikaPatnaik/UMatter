import React from 'react';  
import './App.css';       
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/BugSmashers" component={Home} exact/>
        <Route path="/signin" component={SigninPage} exact/>
      </Routes>
    </Router>
  );
}

export default App;