import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "../home/testimonial.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Veena Student",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Learning Veena from Rajalakshmi has been a transformative experience. Her patience, expertise, and passion for teaching are truly inspiring. I've grown so much as a musician in just one year!",
  },
  {
    name: "Arjun Patel",
    role: "Yoga Practitioner",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The yoga classes have completely changed my life. I feel more balanced, energetic, and focused. The combination of Ashtanga and Vinyasa is perfect for building strength and flexibility.",
  },
  {
    name: "Meera Krishnan",
    role: "Virtual Student",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Nataraji Arts is more than just a music school - it's a community. The virtual classes are excellent, and I love being able to learn traditional arts from anywhere in the world.",
  },
  {
    name: "Vikram Reddy",
    role: "Advanced Student",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "The structured curriculum and personalized attention have helped me progress rapidly. I performed my first recital last month, and it was an unforgettable experience!",
  },
  {
    name: "Vikram Reddy",
    role: "Advanced Student",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "The structured curriculum and personalized attention have helped me progress rapidly. I performed my first recital last month, and it was an unforgettable experience!",
  },
  {
    name: "Vikram Reddy",
    role: "Advanced Student",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "The structured curriculum and personalized attention have helped me progress rapidly. I performed my first recital last month, and it was an unforgettable experience!",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section mx-4 mx-md-0">
      <div className="testimonial-swipe">
        <h2 className="section-title text-white">What Our Students Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={35}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <span className="quote">”</span>

                <img src={item.img} alt={item.name} className="student-img" />

                <h4>{item.name}</h4>
                <p className="role">{item.role}</p>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="review">"{item.text}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
