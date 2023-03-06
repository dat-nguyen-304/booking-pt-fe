import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/user/images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import styles from "../../layouts/index.module.css";
const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Consectetur non nostrud enim nostrud est culpa ullamco incididunt
            nisi. Consectetur non nostrud enim nostrud est culpa ullamco
            incididunt nisi.
          </p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/eniola-ademola-7386161a7/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/_daveworld"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com/_daveworld"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4 className={styles.h4_4}>Permalinks</h4>
          <Link className={styles.link__1} to="/user/about">
            About
          </Link>
          <Link className={styles.link__1} to="/user/plans">
            Plans
          </Link>
          <Link className={styles.link__1} to="/user/trainers">
            Trainers
          </Link>
          <Link className={styles.link__1} to="/user/gallery">
            Gallery
          </Link>
          <Link className={styles.link__1} to="/user/contact">
            Contact
          </Link>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
