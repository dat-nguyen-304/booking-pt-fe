import { Route, Switch } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import React, { useEffect } from "react";
import Home from "../views/pages/home/Home";
import About from "../views/pages/about/About";
import Contact from "../views/pages/contact/Contact";
import Gallery from "../views/pages/gallery/Gallery";
import Plans from "../views/pages/plans/Plans";
import Trainers from "../views/pages/trainers/Trainers";
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
    <div>
      <Navbar />
      <Switch>
        <Route path="/user/home" component={Home} />
        <Route path="/user/about" component={About} />
        <Route path="/user/profile" component={Contact} />
        <Route path="/user/gallery" component={Gallery} />
        <Route path="/user/plans" component={Plans} />
        <Route path="/user/trainers" component={Trainers} />
      </Switch>
      <Footer />
    </div>
  );
}

export default User;
