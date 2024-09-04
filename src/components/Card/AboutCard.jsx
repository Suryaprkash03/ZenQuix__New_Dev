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
            This is a detailed description for our mission. It is too long and
            should be scrollable if it exceeds the card height.
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
            This is a detailed description for our vision. It is too long and
            should be scrollable if it exceeds the card height.
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
            This is a detailed description for our core values. It is too long
            and should be scrollable if it exceeds the card height.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
