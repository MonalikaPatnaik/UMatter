import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import Icon3 from '../../images/image3.png'
import { TestimonialsContainer, TestimonialsH1, TestimonialsH2, TestimonialsWrapper, TestimonialsCard, TestimonialsIcon, TestimonialsP } from './TestimonialsElements'
import { motion } from 'framer-motion';
import { cardOneVariants, cardTwoVariants, cardThreeVariants } from './CardAnimation';
const Testimonials = () => {
    const el = useRef(null);

    const [testimonialsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        // Fetch testimonials data from the backend
        fetch('http://localhost:8081/feedback')
            .then(response => response.json())
            .then(data => setTestimonialsData(data));
    }, []);

    // Get the last three entries from the testimonials data
    const lastThreeTestimonials = testimonialsData.slice(-3);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Testimonials'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: false,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <TestimonialsContainer id="testimonials"
            whileInView={{ y: [130, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.8 }}
        >

            <TestimonialsH1><span ref={el} style={{ display: 'inline-block' }} /></TestimonialsH1>

            <TestimonialsWrapper>
                
                    <div style={{ display: 'flex'}}>
                        {lastThreeTestimonials.map(testimonial => (
                            <TestimonialsCard key={testimonial.user_index}>
                                <TestimonialsIcon src={Icon3} />
                                <TestimonialsH2>{testimonial.username}</TestimonialsH2>
                                <TestimonialsP>{testimonial.feedback}</TestimonialsP>
                            </TestimonialsCard>
                        ))}
                    </div>
                
            </TestimonialsWrapper>
        </TestimonialsContainer>

    )
}

export default Testimonials