import React from "react";
import { Link } from "react-router-dom";
import Image from "../../components/user/images/main_header.png";
import style from "../../layouts/index.module.css";
const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h1 className={style.h1_1}>Join The Legends of the Fitness World</h1>
          <p>
            The focus of this program is on providing exceptional 1-on-1 PT
            services to everyone the good quality Muay Thai martial arts
            curriculum is available, in a safe and positive learning environment
            where everyone all ages can enjoy.
          </p>
          <Link to="/user/plans" className={style.btn}>
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="MainHeaderImage" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
