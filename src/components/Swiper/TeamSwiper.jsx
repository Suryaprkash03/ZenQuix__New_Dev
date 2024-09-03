import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import "./TeamSwiper.css"; // Import your custom CSS file

const TeamSwiper = () => {
  const teamMembers = [
    { name: "Emma Johnson", role: "Web Developer", img: "team-img-1.png" },
    { name: "John Smith", role: "Web Designer", img: "team-img-2.png" },
    { name: "Olivia Smith", role: "Content Writer", img: "team-img-3.png" },
    {
      name: "Michael Johnson",
      role: "Social Media Manager",
      img: "team-img-4.png",
    },
    { name: "Ava Brown", role: "SEO Specialist", img: "team-img-5.png" },
    { name: "William Brown", role: "Marketing Manager", img: "team-img-6.png" },
    {
      name: "Kushvinder Kaur",
      role: "Customer Support Representative",
      img: "team-img-7.png",
    },
    { name: "David Davis", role: "Project Manager", img: "team-img-8.png" },
    { name: "Avery Allen", role: "Data Analyst", img: "team-img-9.png" },
    { name: "Robert Anderson", role: "Sales Manager", img: "team-img-10.png" },
  ];

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: -100,
        depth: 500,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      modules={[EffectCoverflow, Autoplay, Pagination]}
      className="mySwiper"
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index}>
          <div
            className={`team-box team-box${index + 1}`}
            style={{ backgroundImage: `url(${member.img})` }}
          >
            <div className="team-name">
              <center>
                <div className="team-content">
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                  <FaFacebook className="logo-facebook" />
                  <FaInstagram className="logo-instagram" />
                  <FaTwitter className="logo-twitter" />
                  <FaLinkedin className="logo-linkedin" />
                  <FaGithub className="logo-github" />
                </div>
              </center>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default TeamSwiper;
