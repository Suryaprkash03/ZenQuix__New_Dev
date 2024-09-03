import { motion } from "framer-motion";
import React from "react";
import Card from "../Card/Card";
import "./Services.css";

const Services = () => {

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      <div className="awesome">
        <span>About Us</span>
        <span>ZenQuix Technologies inc</span>
        <spane>
          We provide world class Networking, Infrastructure
          <br />
          Computing & so many other services
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "17rem" }}
          whileInView={{ left: "13em" }}
          transition={transition}
        >
          <Card
            heading={"Who we Are?"}
            detail={"Brief description of Who we are."}
            fullDetail={
              "Welcome to ZenQuix Technologies, a leading provider of comprehensive IT services tailored to meet the diverse needs of businesses. With a strong focus on Network Services, Cloud Services, Infrastructure Services, Software Development, and End User Services, we are dedicated to empowering organizations with cutting-edge technology solutions. At ZenQuix Technologies, we believe in the power of technology to drive business growth and innovation. Our team of skilled professionals brings a wealth of experience and expertise to the table, delivering exceptional services that address your unique IT requirements. Partner with us to unlock the full potential of your IT infrastructure and propel your organization towards success."
            }
          />
        </motion.div>

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            heading={"What we Do?"}
            detail={"Short intro to what we do at ZenQuix Technologies."}
            fullDetail={
              "          At ZenQuix Technologies, we offer a comprehensive range of IT services to empower businesses with seamless technology solutions. Our expert team specializes in the following areas: Network Services, Cloud Services, Datacenter Services, Software Development, End User Services, IT Staff Augmentaion & Consulting Services"
            }
          />
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "19rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            heading={"Why ZenQuix Technologies?"}
            detail={"Short text about why choose ZenQuix Technologies."}
            fullDetail={
              "Choose ZenQuix Technologies as your trusted IT partner. Experience our expertise, comprehensive solutions, tailored approach, innovation-driven mindset, customer-centricity, and unwavering reliability. We are here to transform your technology landscape, optimize your IT operations, and empower your organization for success in the digital age."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
