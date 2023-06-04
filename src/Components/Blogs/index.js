import React, { useState } from "react";
import Icon1 from "../../images/no-drinking.png";
import Icon2 from "../../images/smoking-is-Injurious-to-Health.jpeg";
import Icon3 from "../../images/Embracing_the_Power_of_Menstruation.png";
import Icon4 from "../../images/5Ds.jpg";
import Icon5 from "../../images/Distraction tec.jpg";
import Icon6 from "../../images/group-quiting.jpg";
import Icon7 from "../../images/non-alco-cocktail.png";
import Icon8 from "../../images/isolation.jpg";
import Icon9 from "../../images/natural remedies.jpg";
import Icon10 from "../../images/No-yes.jpg";

import {
  BlogsContainer,
  BlogsH2,
  BlogsWrapper,
  BlogsCard,
  BlogsIcon,
  BlogsP,
  ReadMoreButton, // Added ReadMoreButton import
} from "./BlogsElements";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value);
    }
  };

  const handleButtonClick = () => {
    setSearchTerm("");
  };

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BlogsContainer id="Blogs" >
      <div style={{ height: "150px" }}></div>



       <div className="search-container">
         <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
          style={{
            width: "300px", // Set width to your desired value
            borderRadius: "8px",
            padding: "8px",
            textAlign: "center",
            justifyContent:"center"
            
            
            // Add any other desired inline styles
          }}
        />
        <button
          className="search-button"
          onClick={handleButtonClick}
          style={{
            backgroundColor: "green", // Set background color to green
            color: "white", // Set text color to white
            borderRadius: "8px",
            padding: "8px",
            marginTop: "8px",
            fontSize: "19px",
            width: "100px", // Set width to your desired value
            marginLeft: "8px", // Add any other desired inline styles
          }}
        >
          Clear
        </button>
      </div>
      <div style={{ height: "50px" }}></div>
      <div style={{ height: "50px" }}></div>
      <BlogsWrapper>
        {filteredBlogs.map((blog, index) => (
          <BlogsCard key={index}>
            <BlogsIcon src={blog.icon} />
            <BlogsH2>
              <b>{blog.title}</b>
            </BlogsH2>
            <BlogsP>{blog.content}</BlogsP>
            <ReadMoreButton>Read more</ReadMoreButton>
          </BlogsCard>
        ))}
      </BlogsWrapper>
    </BlogsContainer>
  );
};

export default Blogs;

const blogsData = [
  {
    icon: Icon7,
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
    icon: Icon8,
    title: "Isolation – the secret enemy",
    content:
      "Nature is ideal for lowering stress levels, but it’s also a great way to remind yourself there’s a whole world out there and it can be comforting to see the bigger picture when we step outside our bubbles.",
  },
  {
    icon: Icon10,
    title: "Learning how to say no",
    content:
      "As well as fear, people can sniff out indecision, so you need to make sure that your rebuttal to why you aren’t drinking is both confident and watertight. It doesn’t need to be lengthy.",
  },
  {
    icon: Icon3,
    title: "Embracing the Power of Menstruation",
    content:
      "Menstruation involves destigmatizing it, recognizing its significance, advocating for menstrual health, and challenging societal norms to celebrate the strength and beauty of women's bodies.",
  },
  {
    icon: Icon5,
    title: "Distraction techniques to avoid cravings",
    content:
      "If you get a craving or experience minor withdrawal, use distraction until the urge passes. Distract your mind and your body. If you get a craving, chew on gum, talk a walk, open a window, or begin a new activity.",
  },
  {
    icon: Icon6,
    title: "Support groups can help you quit smoking",
    content:
      "Let your friends, family, and coworkers know of your plans to stop smoking and your quit date. It helps for people around you to be aware of what you are going through, especially when you are grumpy.",
  },
  {
    icon: Icon4,
    title: "The 5D's that would help with smoking cessation",
    content:
      "No matter where you are in your journey of quitting, the five Ds are healthy coping mechanisms. The five Ds are: Delay, Distract, Drink water, Deep breathing, Discuss",
  },
  {
    icon: Icon9,
    title: "Few natural remedies to cope with nicotine withdrawal",
    content:
      "As a substitute for smoking, try chewing on carrots, pickles, apples, celery, sugarless gum, or hard candy. Keeping your mouth busy may stop the psychological need to smoke.",
  },
];
