import { lazy, Suspense } from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Loader } from './Components/Loader/Loader';
import HabitTracker from './pages/HabitTracker';

const Home = lazy(() => import('./pages'));
const SigninPage = lazy(() => import('./pages/signin'));
const DevelopPage = lazy(() => import('./pages/develop'));
const Error404 = lazy(() => import('./pages/Error404'));
const BlogPage = lazy(() => import('./pages/blogs'));
const FeedbackPage = lazy(() => import('./pages/feedback'));
const SignupPage = lazy(() => import('./pages/signup'));
const Profile = lazy(() => import('./pages/profile'));
const Navbar = lazy(() => import('./Components/Navbar'));
const ContactPage = lazy(() => import('./pages/contact'));
const GetMail = lazy(() => import('./Components/Forgot_password/ForgotPassword'));
const Verify = lazy(() => import('./Components/Forgot_password/OTPVerfication'));
const Blog = lazy(() => import('./Components/BlogPage/Blog'));
const ConsultWithDoctor = lazy(() => import('./pages/consult_with_doctor'));
const Consultationform = lazy(() => import('./Components/Consult_With_Doctor/ConsultationForm'));
const Workshops = lazy(() => import('./Components/Workshops/Workshops'));

// import Contact from "./Components/Contactus/Contact";
// window.$crisp=[];
// window.CRISP_WEBSITE_ID="e79efdd2-abee-4a1e-b868-c7929585ebd9";

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SigninPage />} />
          <Route exact path="/develop" element={<DevelopPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consultwithdoctor" element={<ConsultWithDoctor />} />
          <Route path="/consultwithdoctor/consultationform" element={<Consultationform />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/blogs/:id" element={<Blog />} exact />
          <Route exact path="/signin/forgotPassword" element={<GetMail />} />
          <Route exact path="/signin/otpverification" element={<Verify />} />
          <Route path="/*" element={<Error404 />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/services/HabitTracker" element={<HabitTracker />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
