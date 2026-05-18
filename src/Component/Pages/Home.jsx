import React from "react";
import Header from "../Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Veena from "../../Assets/veenabright.png";
import Veena2 from "../../Assets/veenadark.png";
import veena3 from "../../Assets/veenaart.png";
// import Veena from "../Assets/VeenaclassatNataRajiArts.jpg";
import raji from "../../Assets/RajiwithVeena.jpg";
import meditation from "../../Assets/meditation.jpg";
import Social from "../Socialicon/Social";
import "../Pages/home.css";
import baratam from "../../Assets/bharatam.png";
import EastIcon from "@mui/icons-material/East";
import foundation from "../../Assets/laptop-icon.png";
import lotus from "../../Assets/lotus-icon.png";
import veenaIcon from "../../Assets/veena-icon.png";
import "../home/feature.css";
import Hero from "../home/Hero";
import WhyChoose from "../home/Whychoose";
import Classes from "../home/Classes";
import Gallery from "../home/Gallery";
import Testimonials from "../home/Testimonial";
import Footer from "../footer/Footer";

const Home = () => {
  const slides = [
    {
      image: Veena,
      title: "Find Your",
      colorTitle: "Inner Balance",
      desc: "Learn from experienced teachers",
      btn1: "Meet Our Teacher",
      iconbtn1: <EastIcon />,
      btn2: "Get Started Today",
    },
    {
      image: Veena2,
      title: "Welcome to ",
      colorTitle: "Sattvalaya Arts",
      desc: "Join our Yoga & Meditation classes",
      btn1: "Meet Our Teacher",
      iconbtn1: <EastIcon />,
      btn2: "Get Started Today",
    },
    {
      image: veena3,
      title: "Master the ",
      colorTitle: "Divine Veena",
      desc: "Join our Yoga & Meditation classes",
      btn1: "Meet Our Teacher",
      iconbtn1: <EastIcon />,
      btn2: "Get Started Today",
    },
  ];

  return (
    <div>
      <Header />

      <div className="home-page mx-3 mx-md-0">
        <Social />
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 6000 }}
          loop={true}
          className="heroSwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="home-slide"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  objectFit: "contain",
                }}
              >
                {/* overlay */}
                <div className="overlay"></div>

                {/* Bootstrap Content */}
                <div className="content-box container-fluid d-flex align-items-center">
                  <div className="row left-content w-100">
                    <div className="col-lg-6 col-md-8 col-12">
                      <div className="ps-lg-5 ps-3">
                        <h1 className="m- p-0">{slide.title}</h1>

                        <h1 className="color-h1 m-0 p-0">{slide.colorTitle}</h1>

                        <p className="mt-3 p-0">{slide.desc}</p>

                        <div className="d-flex gap-3 flex-wrap mt-4">
                          <button className="gold-btn">
                            {slide.btn1}
                            <span>{slide.iconbtn1}</span>
                          </button>

                          <button className="trans-btn">
                            {slide.btn2}
                            <span>{slide.iconbtn1}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <section className="d-none d-md-block feature-section position-absolute start-50 translate-middle-x bottom-0 w-75 px-3 pb-5 z-3">
          <div className="container-fluid">
            <div className="row justify-content-center g-4">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="feature-card d-flex align-items-start gap-4">
                  <div className="feature-icon">
                    <img src={foundation} alt="Flexible Learning" />
                  </div>

                  <div>
                    <h3>
                      Flexible Learning
                      <br />
                      for Modern Lifestyles
                    </h3>

                    <p>
                      Learn anytime, anywhere with our online programs designed
                      for your convenience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="feature-card d-flex align-items-start gap-4">
                  <div className="feature-icon">
                    <img src={lotus} alt="Holistic Practice" />
                  </div>

                  <div>
                    <h3>
                      Holistic Mind-Body
                      <br />
                      Practice
                    </h3>

                    <p>
                      Nurture your well-being with practices that balance your
                      mind, body, and spirit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="feature-card d-flex align-items-start gap-4">
                  <div className="feature-icon">
                    <img src={veenaIcon} alt="Classical Veena" />
                  </div>

                  <div>
                    <h3>
                      A Foundation in
                      <br />
                      Classical Veena
                    </h3>

                    <p>
                      Build a strong foundation in Carnatic music with expert
                      guidance and tradition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Hero />
      <WhyChoose />
      <Classes />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
