import React, { useState } from "react";
import Icon1 from "../../images/no-drinking.png";
import Icon2 from "../../images/smoking-is-Injurious-to-Health.jpeg";
import {
  BlogsContainer,
  BlogsH1,
  BlogsH2,
  BlogsWrapper,
  BlogsCard,
  BlogsIcon,
  BlogsP,
} from "./BlogsElements";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BlogsContainer id="Blogs">
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <BlogsWrapper>
        {filteredBlogs.map((blog, index) => (
          <BlogsCard key={index}>
            <BlogsIcon src={blog.icon} />
            <BlogsH2>
              <b>{blog.title}</b>
            </BlogsH2>
            <BlogsP>{blog.content}</BlogsP>
          </BlogsCard>
        ))}
      </BlogsWrapper>
    </BlogsContainer>
  );
};

export default Blogs;

const blogsData = [
  {
    icon: Icon1,
    title: "5 Sophisticated Non-Alcoholic Cocktails to try on your Date Night",
    content:
      "For those looking for a more sober option, alcohol-free cocktails can be the perfect way to give your evening a touch of sophistication.",
  },
  {
    icon: Icon2,
    title: "What Smoking Does to Your Body",
    content:
      "Did you know long-term smoking and vaping can lead to many health issues like high blood pressure, strokes, heart conditions, and various forms of cancer? Smoking and vaping can also cause blockages in your body.",
  },
  {
    icon: Icon1,
    title: "Isolation – the secret enemy",
    content:
      "Nature is ideal for lowering stress levels, but it’s also a great way to remind yourself there’s a whole world out there and it can be comforting to see the bigger picture when we step outside our bubbles.",
  },
  {
    icon: Icon1,
    title: "Learning how to say no",
    content:
      "As well as fear, people can sniff out indecision, so you need to make sure that your rebuttal to why you aren’t drinking is both confident and watertight. It doesn’t need to be lengthy.",
  },
];
