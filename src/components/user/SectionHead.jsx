import React from "react";
import style from "../../layouts/index.module.css";
// A reuseable component for each section name
const SectionHead = ({ icon, title, className }) => {
	return (
		<div className={`${style.section__head} ${className}`}>
			<span className={style.span_1}>{icon}</span>
			<h2 className={style.h2_2}>{title}</h2>
		</div>
	);
};

export default SectionHead;
