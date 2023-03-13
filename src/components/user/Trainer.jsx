import React from "react";
import Card from "../../views/pages/UI/Card";
import styles from "../../layouts/index.module.css";

const Trainer = ({ id, image, name, center, rating, description }) => {
  return (
    <Card className="trainer">
      <div className="trainer__img">
        <img src={image} alt={name} />
      </div>
      <h3 className={styles.h3_3}>{name}</h3>
      <p>Work: {center}</p>
      <p>Rate: {rating}</p>
      <p>Description: {description}</p>
    </Card>
  );
};

export default Trainer;
