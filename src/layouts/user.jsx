import { Route, Switch } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import React, { useEffect } from "react";
import Home from "../views/pages/home/Home";
import About from "../views/pages/about/About";
import Profile from "../views/pages/contact/Contact";
import Gallery from "../views/pages/gallery/Gallery";
import Plans from "../views/pages/plans/Plans";
import Trainers from "../views/pages/trainers/Trainers";
import Booking from "../views/pages/booking/booking";
import Schedule from "../views/pages/schedule/schedule";
import Footer from "../components/user/Footer";
import style from"./index.module.css";
function User() {
  useEffect(() => {
    document.body.className = style['body_1'];
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div className={style.body_1}>
      <Navbar />
      <Switch>
        <Route path="/user/home" component={Home} />
        <Route path="/user/about" component={About} />
        <Route path="/user/profile" component={Profile} />
        <Route path="/user/gallery/:id" component={Gallery} />
        <Route path="/user/plans" component={Plans} />
        <Route path="/user/trainers" component={Trainers} />
        <Route path="/user/booking/:id" component={Booking} />
        <Route path="/user/Schedule" component={Schedule} />
      </Switch>
      <Footer />
    </div>
  );
}

export default User;
