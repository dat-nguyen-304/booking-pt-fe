import React from "react";
import styles from "../../../layouts/index.module.css";
const Card = ({ className, children }) => {
	return <article className={`${styles.card_1} ${className}`}>{children}</article>;
};

export default Card;
