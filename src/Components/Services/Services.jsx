import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from '../Images/1.png';
import Image2 from '../Images/2.jpg';
import Image3 from '../Images/3.jpg';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';
import "./Services.css";

const servicesData = [
  { title: "Service 1", description: "Description for Service 1" },
  { title: "Service 2", description: "Description for Service 2" },
  { title: "Service 3", description: "Description for Service 3" },
  // Add more services as needed
];

const Services = () => {
  return (
    <div id="services">
      <p id="shead">Our Services</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {servicesData.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-content">
              {/* You can use different images for each slide */}
              {index === 0 && <img src={Image1} alt={`Slide ${index + 1}`} />}
              {index === 1 && <img src={Image2} alt={`Slide ${index + 1}`} />}
              {index === 2 && <img src={Image3} alt={`Slide ${index + 1}`} />}
              {/* Add more conditions for additional slides */}

              <div className="text-container">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Services;
