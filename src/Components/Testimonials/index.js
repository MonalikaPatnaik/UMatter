import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductForSlider";
import { TestimonialsContainer, TestimonialsH1 } from './TestimonialsElements'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typed from 'typed.js';


class Testimonial extends Component {

    constructor() {
        super();
        this.el = React.createRef();
    this.state = {
      slides: [
                {
                    user_index: 1,
                    username: "Emily Smith",
                    Icon3: "https://img.freepik.com/free-vector/man-working-laptop-cartoon-icon-illustration_138676-1953.jpg?w=740&t=st=1686378983~exp=1686379583~hmac=4d9e6abe79a2a7f5ac2691d4c9655e75e95393dd1f891ca5d3acbab8445f5e10",
                    feedback: "I had a great experience using the website to find a doctor for my specific health concern."
                },
                {
                    user_index: 2,
                    username: "David Johnson",
                    Icon3: "https://img.freepik.com/free-vector/animation-character-portrait-woman-presenting-pose-flat-design_40876-2330.jpg?w=740&t=st=1686378696~exp=1686379296~hmac=540a1eb1c2d15dd32471d13832e1fea4b8b845c198c67e37c68614c6f908bf5d",
                    feedback: "As a doctor, I found the website to be a valuable platform for reaching out to patients."
                },
                {
                    user_index: 3,
                    username: "Sophia Anderson",
                    Icon3: "https://img.freepik.com/free-vector/curly-hair-concept-illustration_114360-7633.jpg?w=740&t=st=1686378727~exp=1686379327~hmac=1eb65a559e497e52ff9a009e71ddddb5e57cef4d35b2eea92236dd6f072fc998",
                    feedback: "I highly recommend this website to anyone looking for reliable healthcare services."
                },          
                {
                    user_index: 1,
                    username: "Emily Smith",
                    Icon3: "https://img.freepik.com/free-vector/man-working-laptop-cartoon-icon-illustration_138676-1953.jpg?w=740&t=st=1686378983~exp=1686379583~hmac=4d9e6abe79a2a7f5ac2691d4c9655e75e95393dd1f891ca5d3acbab8445f5e10",
                    feedback: "I had a great experience using the website to find a doctor for my specific health concern."
                },
                {
                    user_index: 2,
                    username: "David Johnson",
                    Icon3: "https://img.freepik.com/free-vector/animation-character-portrait-woman-presenting-pose-flat-design_40876-2330.jpg?w=740&t=st=1686378696~exp=1686379296~hmac=540a1eb1c2d15dd32471d13832e1fea4b8b845c198c67e37c68614c6f908bf5d",
                    feedback: "As a doctor, I found the website to be a valuable platform for reaching out to patients."
                },
                {
                    user_index: 3,
                    username: "Sophia Anderson",
                    Icon3: "https://img.freepik.com/free-vector/curly-hair-concept-illustration_114360-7633.jpg?w=740&t=st=1686378727~exp=1686379327~hmac=1eb65a559e497e52ff9a009e71ddddb5e57cef4d35b2eea92236dd6f072fc998",
                    feedback: "I highly recommend this website to anyone looking for reliable healthcare services."
                }          
            ]
    };
  }
  componentDidMount() {
      // Fetch testimonials data from the backend
      fetch('http://localhost:8081/feedback')
        .then(response => response.json())
        .then(data => {
          this.setState({ slides: data });
          console.log(data);
        });

    const typed = new Typed(this.el.current, {
      strings: ['Testimonials'],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      showCursor: false,
    });
  }

  render() {

    const lastThreeTestimonials = this.state.slides.slice(-4);

    var settings = {
      className: "center",  
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true, 
      autoplaySpeed: 2500, 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <TestimonialsContainer
          id="testimonials"
          whileInView={{ y: [130, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%" }}
      >
          <div style={{ backgroundColor: "black", color: "white", textAlign: "center" }}>
              <TestimonialsH1><span ref={this.el} style={{ display: 'inline-block' }} /></TestimonialsH1>
              <Slider {...settings} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {this.state.slides.map((slide, index) => {
                      return (
                          <div key={slide.id}>
                              <ProductCard product={slide} />
                          </div>
                      );
                  })}
              </Slider>
          </div>
      </TestimonialsContainer>
  );
}
}

export default Testimonial;