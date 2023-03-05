import React from "react";
import style from "../../layouts/index.module.css";
const Header = ({ title, image, children }) => {
	return (
		<header className= {style.header_1}>
			<div className={style.header__container_1}>
				<div className={style.header__container_lg}>
					<img src={image} alt="Header Background" />
				</div>
				<div className={style.header__content}>
					<h2 className={style.h2_2} style={{color: "white", fontWeight:"bold"}}>{title}</h2>
					<p>{children}</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
