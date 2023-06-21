import React from "react";
import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";
import Blogs from "../Components/Blogs";
import Reviews from "../Components/Blogs/review";
import GoToTop from "../Components/GoToTop";
const BlogPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <GoToTop/>
      <Blogs />
      <Reviews />
      <Footer />
    </>
  );
};

export default BlogPage;
