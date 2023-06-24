import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Error404 from './pages/Error404';
import BlogPage from './pages/blogs';
import FeedbackPage from './pages/feedback';
import SignupPage from './pages/signup';
import Profile from './pages/profile';
import Navbar from './Components/Navbar';
import ContactPage from './pages/contact';
import GetMail from './Components/Forgot_password/ForgotPassword';
import Verify from './Components/Forgot_password/OTPVerfication';
import Blog from './Components/BlogPage/Blog';
// importct from "./Components/Contactus/Contact";
// window.$crisp=[];
// window.CRISP_WEBSITE_ID="e79efdd2-abee-4a1e-b868-c7929585ebd9";

function App() {
	return (

		
		<HashRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/signin" element={<SigninPage />} />
				<Route path="/blogs" element={<BlogPage />} />
				<Route path="/feedback" element={<FeedbackPage />} />
				<Route path="/contact" element={<ContactPage />} />
				
				<Route 
					path="/blogs/:id"
					element={<Blog/>}
					exact
				/>

				<Route
					exact
					path="/signin/forgotPassword"
					element={<GetMail/>}
				/>
				<Route
					exact
					path="/signin/otpverification"
					element={<Verify/>}
				/>
				<Route path="/*" element={<Error404 />} />
				<Route exact path="/signup" element={<SignupPage />} />
				<Route exact path="/profile" element={<Profile />} />
			</Routes>
			
		</HashRouter>


	);
}

export default App;
