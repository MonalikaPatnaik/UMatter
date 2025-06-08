import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon4 from "../../images/5Ds.webp";
import Icon5 from "../../images/Distraction tec.webp";
import Icon3 from "../../images/Embracing_the_Power_of_Menstruation.webp";
import Icon10 from "../../images/No-yes.webp";
import Icon6 from "../../images/group-quiting.webp";
import Icon8 from "../../images/isolation.webp";
import Icon11 from "../../images/mental-health-advice.webp";
import Icon9 from "../../images/natural remedies.webp";
import Icon7 from "../../images/non-alco-cocktail.webp";
import Icon2 from "../../images/smoking-is-Injurious-to-Health.webp";
import {
  BlogsCard,
  BlogsContainer,
  BlogsH1,
  BlogsIcon,
  BlogsP,
  BlogsWrapper,
  ReadMoreButton,
  SearchContainer,
  SearchWrapper,
  SearchInput,
  SearchButton,
  ClearButton,
  BlogsTitle,
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
    <BlogsContainer id="Blogs">
      <BlogsTitle>Explore Our Blogs</BlogsTitle>
      
      <SearchContainer>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <SearchWrapper>
            <SearchInput
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={handleSearch}
              onKeyPress={handleKeyPress}
            />
            <SearchButton>
              <i className="fas fa-search"></i>
            </SearchButton>
          </SearchWrapper>
          <ClearButton onClick={handleButtonClick}>
            Clear
          </ClearButton>
        </div>
      </SearchContainer>

      <BlogsWrapper>
        {filteredBlogs.length === 0 ? (
          <div style={{ 
            gridColumn: "1 / -1", 
            textAlign: "center", 
            color: "var(--text-clr)",
            fontSize: "1.2rem",
            padding: "40px"
          }}>
            No results found
          </div>
        ) : (
          filteredBlogs.map((blog, index) => (
            <BlogsCard key={index}>
              <BlogsIcon src={blog.icon} alt={blog.title} />
              <BlogsH1>
                <b>{blog.title}</b>
              </BlogsH1>
              <BlogsP>{blog.content}</BlogsP>
              {blog.hyperlink === "" ? (
                <Link to="./abc">
                  <ReadMoreButton>Read more</ReadMoreButton>
                </Link>
              ) : (
                <a href={blog.hyperlink} target="_blank" rel="noopener noreferrer">
                  <ReadMoreButton>Read more</ReadMoreButton>
                </a>
              )}
            </BlogsCard>
          ))
        )}
      </BlogsWrapper>
    </BlogsContainer>
  );
};

export default Blogs;

const blogsData = [
  {
    icon: Icon7,
    title: "5 Sophisticated Non-Alcoholic Cocktails to Try on your Date Night",
    content:
      "For those looking for a more sober option, alcohol-free cocktails can be the perfect way to give your evening a touch of sophistication.",
    hyperlink:
      "https://alcoholchange.org.uk/blog/2023/5-sophisticated-non-alcoholic-cocktails-to-try-on-your-date-night",
  },
  {
    icon: Icon2,
    title: "What Smoking Does to Your Body",
    content:
      "Did you know long-term smoking and vaping can lead to many health issues like high blood pressure, strokes, heart conditions, and various forms of cancer? Smoking and vaping can also cause blockages in your body.",
    hyperlink: "",
  },
  {
    icon: Icon8,
    title: "Isolation - the secret enemy",
    content:
      "Nature is ideal for lowering stress levels, but it's also a great way to remind yourself there's a whole world out there and it can be comforting to see the bigger picture when we step outside our bubbles.",
    hyperlink:
      "https://alcoholchange.org.uk/blog/2023/week-five-isolation-the-secret-enemy",
  },
  {
    icon: Icon10,
    title: "Learning how to say no",
    content:
      "As well as fear, people can sniff out indecision, so you need to make sure that your rebuttal to why you aren't drinking is both confident and watertight. It doesn't need to be lengthy.",
    hyperlink: "https://www.betterup.com/blog/how-to-say-no",
  },
  {
    icon: Icon3,
    title: "Embracing the Power of Menstruation",
    content:
      "Menstruation involves destigmatizing it, recognizing its significance, advocating for menstrual health, and challenging societal norms to celebrate the strength and beauty of women's bodies.",
    hyperlink:
      "https://www.futureofpersonalhealth.com/womens-health/embracing-the-power-of-the-period/",
  },
  {
    icon: Icon5,
    title: "Distraction techniques to avoid cravings",
    content:
      "If you get a craving or experience minor withdrawal, use distraction until the urge passes. Distract your mind and your body. If you get a craving, chew on gum, talk a walk, open a window, or begin a new activity.",
    hyperlink:
      "https://edition.cnn.com/2016/06/08/health/food-cravings-mindful-distraction-solution/index.html",
  },
  {
    icon: Icon6,
    title: "Support groups can help you quit smoking",
    content:
      "Let your friends, family, and coworkers know of your plans to stop smoking and your quit date. It helps for people around you to be aware of what you are going through, especially when you are grumpy.",
    hyperlink: "https://medlineplus.gov/ency/article/007440.htm",
  },
  {
    icon: Icon4,
    title: "The 5D's that would help with smoking cessation",
    content:
      "No matter where you are in your journey of quitting, the five Ds are healthy coping mechanisms. The five Ds are: Delay, Distract, Drink water, Deep breathing, Discuss",
    hyperlink:
      "https://www.verywellmind.com/memorize-the-5-ds-to-beat-smoking-urges-2825310",
  },
  {
    icon: Icon9,
    title: "Few natural remedies to cope with nicotine withdrawal",
    content:
      "As a substitute for smoking, try chewing on carrots, pickles, apples, celery, sugarless gum, or hard candy. Keeping your mouth busy may stop the psychological need to smoke.",
    hyperlink:
      "https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/withdrawal-fact-sheet#:~:text=Remind%20yourself%20that%20cravings%20will,the%20psychological%20need%20to%20smoke.",
  },
  {
    icon: Icon10,
    title: "How does the Medical ChatBot works?",
    content:
      "So, a chatbot is a software that stimulates or makes a human-like conversational environment. Let me tell you that everyone in their life has interacted with chatbots whether one knows or not. As an example let us say you are doing your work on a computer some research on it, and a window pops up that says if you need help. Or while you are going to a good restaurant and ask your google assistant or Siri about which hotel will suit you. So these are scenarios in which you are having an encounter with a chatbot.",
    hyperlink: "https://www.senseforth.ai/conversational-ai/medical-chatbots/",
  },
  {
    icon: Icon9,
    title: "How to quit smoking according to Ayurveda?",
    content:
      "Consumption of a measured mixture of ashwagandha, Bala, shatavari and ginseng every day, or a chyawanprash containing these help in detoxification. Consume a teaspoon of Ajwain,it reduces cravings of smoke and results in reducing the effect so intake nicotine.",
    hyperlink:
      "https://www.hindustantimes.com/lifestyle/health/jal-neti-to-ajwain-ayurveda-tips-to-help-you-quit-smoking-naturally-101649309468261.html",
  },
  {
    icon: Icon11,
    title: "Mental health advice to my younger self",
    content:
      "One of the best questions we can ask ourselves is 'What advice would you give your younger self?' Often. we are experts in our own mental health without realising. So, with taking time to reflect on this question, we can reveal our own pearls of mental health wisdom.",
    hyperlink:
      "https://www.mentalhealth.org.uk/explore-mental-health/blogs/mental-health-advice-my-younger-self",
  },
];