import React from "react";
import { BiBullseye } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import styles from "./AboutCard.module.css";

const CardComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
        <BiBullseye  className={styles.iconWrapper1}/>
        </div>
        <div className={styles.cardContent}>
          <h2>Our Mission</h2>
          <p className={styles.content}>
          At ZenQuix Technologies, our mission is to go beyond being a standard IT services provider. We are passionate about transforming businesses through technology, driving innovation, and delivering exceptional results.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
        <FaRegEye className={styles.iconWrapper1}/>
        </div>
        <div className={styles.cardContent}>
          <h2>Our Vision</h2>
          <p className={styles.content}>
          ZenQuix Technologies's vision is to lead the way as a premier provider of comprehensive IT services, renowned for our innovative solutions, expertise, and unwavering commitment to our clients' success. 
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
        <IoDiamond className={styles.iconWrapper1}/>
        </div>
        <div className={styles.cardContent}>
          <h2>Core Values</h2>
          <p className={styles.content}>
          At ZenQuix Technologies, our core values are the guiding principles that define our company. We are driven by a commitment to excellence, always striving to deliver the highest quality IT services. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
