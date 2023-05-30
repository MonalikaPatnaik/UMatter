import React from "react";
import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";
import Blogs from "../Components/Blogs";
import Reviews from "../Components/Blogs/review";
const BlogPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Blogs />
      <Reviews />
      <Footer />
    </>
  );
};

export default BlogPage;
