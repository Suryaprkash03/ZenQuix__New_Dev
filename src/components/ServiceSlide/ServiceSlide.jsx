import React, { useEffect } from 'react';
import styles from './ServiceSlide.module.css'; // Assuming you're using CSS Modules

const ServiceSlide = () => {
  useEffect(() => {
    const swipe = (direction) => {
      console.log("swipe", direction);

      const position1 = document.querySelector(`.${styles.position1}`);
      const position7 = document.querySelector(`.${styles.position7}`);

      position1.removeEventListener("click", swipeLeft);
      position7.removeEventListener("click", swipeRight);

      const cards = document.querySelectorAll(`.${styles.card}`);
      cards.forEach((card) => {
        const searchedName = "position";
        const searchedNameLength = searchedName.length;

        const indexBegin = card.className.indexOf(searchedName);
        const indexEnd = indexBegin + searchedNameLength + 1;
        const foundClass = card.className.substring(indexBegin, indexEnd);
        const foundClassNumber = parseInt(
          foundClass.substring(searchedNameLength, searchedNameLength + 1)
        );
        let newNumber;
        if (direction === "left") {
          if (foundClassNumber >= 1 && foundClassNumber <= 7) {
            newNumber = foundClassNumber - 1;
          } else {
            newNumber = 7;
          }
        } else if (direction === "right") {
          if (foundClassNumber >= 0 && foundClassNumber <= 6) {
            newNumber = foundClassNumber + 1;
          } else {
            newNumber = 0;
          }
        }
        const newClass = `${searchedName}${newNumber}`;
        card.classList.add(newClass);
        card.classList.remove(foundClass);
      });

      setTimeout(() => {
        const newPosition1 = document.querySelector(`.${styles.position1}`);
        const newPosition7 = document.querySelector(`.${styles.position7}`);

        newPosition1.addEventListener("click", swipeLeft);
        newPosition7.addEventListener("click", swipeRight);
      }, 10);
    }

    const swipeLeft = () => swipe("left");
    const swipeRight = () => swipe("right");

    const position1 = document.querySelector(`.${styles.position1}`);
    const position7 = document.querySelector(`.${styles.position7}`);

    if (position1 && position7) {
      position1.addEventListener("click", swipeLeft);
      position7.addEventListener("click", swipeRight);
    }

    return () => {
      if (position1 && position7) {
        position1.removeEventListener("click", swipeLeft);
        position7.removeEventListener("click", swipeRight);
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.carrousel}>
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={`${styles.card} ${styles[`position${index}`]}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSlide;
