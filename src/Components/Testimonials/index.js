import React, { Component } from "react";
import ProductCard from "./ProductForSlider";
import {
  TestimonialsContainer,
  TestimonialsWrapper,
  TestimonialsH1,
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
      slides: [],
    };
  }
  componentDidMount() {
    // Fetch testimonials data from the backend
    fetch("http://localhost:8081/feedback")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ slides: data });
        console.log(data);
      });

    const typed = new Typed(this.el.current, {
      strings: ["Testimonials"],
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
        <TestimonialsWrapper>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {this.state.slides.map((slide, index) => {
              return (
                <SwiperSlide>
                  <div key={slide.user_id}>
                    <ProductCard product={slide} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </TestimonialsWrapper>
      </TestimonialsContainer>
    );
  }
}

export default Testimonial;
