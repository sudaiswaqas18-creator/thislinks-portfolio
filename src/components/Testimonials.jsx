import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'James Martin',
      image: '/assets/images/3d-illustration-person-with-sunglasses_23-2149436188.avif',
      text: 'Exceeded expectations in every way. Great value for money and completed ahead of schedule.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      image: '/assets/images/3d-illustration-person-with-sunglasses_23-2149436190.avif',
      text: 'Amazing experience from start to finish. Professional, reliable, and exceeded all my expectations. Highly recommend their services!',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael',
      image: '/assets/images/3d-illustration-person-with-sunglasses_23-2149436195.avif',
      text: 'Outstanding quality and attention to detail. The team delivered exactly what I needed on time and within budget.',
      rating: 5
    },
    {
      id: 4,
      name: 'Emily Davis',
      image: '/assets/images/3d-illustration-person-with-sunglasses_23-2149436200.avif',
      text: 'Incredible service! They understood my vision perfectly and brought it to life better than I could have imagined.',
      rating: 5
    },
    {
      id: 5,
      name: 'David Wilson',
      image: '/assets/images/3d-illustration-person-with-sunglasses_23-2149436210.avif',
      text: 'Professional team with excellent communication. They kept me updated throughout the entire project.',
      rating: 5
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      image: '/assets/images/3d-illustration-person-with-sunglasses_23-2149436220.avif',
      text: 'Top-notch construction work! Attention to detail and quality craftsmanship. Would definitely hire again.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Section Title */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">Testimonials</h2>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            prevEl: '.testimonial-prev',
            nextEl: '.testimonial-next',
          }}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonials-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-avatar">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name) + '&background=10b981&color=fff&size=200';
                      }}
                    />
                  </div>
                  
                  <p className="testimonial-text">
                    {testimonial.text}
                  </p>
                  
                  <div className="testimonial-footer">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <svg key={index} className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="testimonial-prev swiper-button">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="testimonial-next swiper-button">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Pagination Dots */}
        <div className="testimonial-pagination"></div>

      </div>
    </section>
  );
};

export default Testimonials;