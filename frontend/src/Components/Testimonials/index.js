import React, { Component } from "react";
import ProductCard from "./ProductForSlider";
import {
  TestimonialsContainer,
  TestimonialsWrapper,
  TestimonialsH1,
  SectionSubtitle,
} from "./TestimonialsElements";
import Typed from "typed.js";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./Swiper.css";

class Testimonial extends Component {
  constructor() {
    super();
    this.el = React.createRef();
    this.state = {
      slides: [
        {
          user_index: 1,
          username: "Emily Smith",
          Icon3:
            "https://img.freepik.com/free-vector/man-working-laptop-cartoon-icon-illustration_138676-1953.jpg?w=740&t=st=1686378983~exp=1686379583~hmac=4d9e6abe79a2a7f5ac2691d4c9655e75e95393dd1f891ca5d3acbab8445f5e10",
          feedback:
            "I had a great experience using the website to find a doctor for my specific health concern. The interface is intuitive and the doctors were very professional.",
        },
        {
          user_index: 2,
          username: "David Johnson",
          Icon3:
            "https://img.freepik.com/free-vector/animation-character-portrait-woman-presenting-pose-flat-design_40876-2330.jpg?w=740&t=st=1686378696~exp=1686379296~hmac=540a1eb1c2d15dd32471d13832e1fea4b8b845c198c67e37c68614c6f908bf5d",
          feedback:
            "As a doctor, I found the website to be a valuable platform for reaching out to patients. The scheduling system is efficient and easy to use.",
        },
        {
          user_index: 3,
          username: "Sophia Anderson",
          Icon3:
            "https://img.freepik.com/free-vector/curly-hair-concept-illustration_114360-7633.jpg?w=740&t=st=1686378727~exp=1686379327~hmac=1eb65a559e497e52ff9a009e71ddddb5e57cef4d35b2eea92236dd6f072fc998",
          feedback:
            "I highly recommend this website to anyone looking for reliable healthcare services. The support team is responsive and helpful.",
        },
        {
          user_index: 4,
          username: "Michael Brown",
          Icon3:
            "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1686379000~exp=1686379600~hmac=8e8c9c8e8c9c8e8c9c8e8c9c8e8c9c8e8c9c8e8c9c8e8c9c8e8c9c8e8c9c8e8c9",
          feedback:
            "The convenience of booking appointments online and the quality of healthcare professionals is outstanding. Very satisfied with the service.",
        },
      ],
    };
  }

  componentDidMount() {
    // Fetch testimonials data from the backend
    // fetch("http://localhost:8081/feedback")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({ slides: data });
    //   });

    const typed = new Typed(this.el.current, {
      strings: ["What Our Users Say"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }


  render() {
    return (
      <TestimonialsContainer
        id="testimonials"
        whileInView={{ y: [130, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%" }}
      >
        <TestimonialsH1>
          <span ref={this.el} style={{ display: "inline-block" }} />
        </TestimonialsH1>
        
        <SectionSubtitle>
          Don't just take our word for it. Here's what our community members have to say about their experience.
        </SectionSubtitle>
        
        <TestimonialsWrapper>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="testimonial-swiper"
          >
            {this.state.slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={slide} />
              </SwiperSlide>
            ))}
            
            {/* Custom navigation buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </TestimonialsWrapper>
      </TestimonialsContainer>
    );
  }
}

export default Testimonial;
