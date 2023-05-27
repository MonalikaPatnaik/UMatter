
import React from "react";
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
  BlogButton,
} from "./BlogsElements";
const Blogs = () => {
  return (
    <BlogsContainer id="Blogs">
      <BlogsWrapper>
        <BlogsCard>
          <BlogsIcon src={Icon1} />
          <BlogsH2>
            <b>
              5 Sophisticated Non-Alcoholic Cocktails to try on your Date Night
            </b>
          </BlogsH2>
          <BlogsP>
            For those looking for a more sober option, alcohol-free cocktails
            can be the perfect way to give your evening a touch of
            sophistication.
          </BlogsP>
          <BlogButton>Read More</BlogButton>
        </BlogsCard>
        <BlogsCard>
          <BlogsIcon src={Icon2} />
          <BlogsH2>
            <b>What Smoking Does to Your Body</b>
          </BlogsH2>
          <BlogsP>
            Did you know long-term smoking and vaping can lead to many health
            issues like high blood pressure, strokes, heart conditions and
            various forms of cancer? Smoking and vaping can also cause blockages
            in your body.
          </BlogsP>
          <BlogButton>Read More</BlogButton>
        </BlogsCard>
        <BlogsCard>
          <BlogsIcon src={Icon1} />
          <BlogsH2>
            <b>Isolation – the secret enemy</b>
          </BlogsH2>
          <BlogsP>
            Nature is ideal for lowering stress levels but it’s also a great way
            to remind yourself there’s a whole world out there and it can be
            comforting to see the bigger picture when we step outside our
            bubbles.
          </BlogsP>
          <BlogButton>Read More</BlogButton>
        </BlogsCard>
        <BlogsCard>
          <BlogsIcon src={Icon1} />
          <BlogsH2> 
            <b>Learning how to say no</b>
          </BlogsH2>
          <BlogsP>
            As well as fear, people can sniff out indecision, so you need to
            make sure that your rebuttal to why you aren’t drinking is both
            confident and watertight. It doesn’t need to be lengthy.
          </BlogsP>
          <BlogButton>Read More</BlogButton>
        </BlogsCard>
      </BlogsWrapper>
    </BlogsContainer>
  );
};

export default Blogs;
