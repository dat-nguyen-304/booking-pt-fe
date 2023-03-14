import React, { useState, useEffect } from "react";
import "./plans.css";
import { getPackage, checkTrainers } from "../../../components/user/data";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import Header from "../../../components/user/Header";
import HeaderImage from "../../../components/user/images/header_bg_4.jpg";
import Card from "../UI/Card";
import styles from "../../../layouts/index.module.css";
import { Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";
const Plans = () => {
  const [packData, setPackData] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const [hasPurchased, setHasPurchased] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const decode = jwt.decode(accessToken).accountId;
  const refreshToken = localStorage.getItem('refreshToken');
  console.log(refreshToken);
  useEffect(() => {
    const getData = async () => {
      const data = await getPackage();
      const pack = await checkTrainers(decode);
      setPackData(data);
      setHasPurchased(pack);
    };
    getData();
  }, []);
  const handleOnClick = (id) => {
    if (hasPurchased.length > 0) {
      setModalIsOpen(true);
    } else {
      setSelectedPackageId(id);
      setRedirect(true);
    }
  };
  console.log(hasPurchased.length);
  return (
    <>
      {redirect && <Redirect to={`/user/booking/${selectedPackageId}`} />}
      <Header title="Membership Plans" image={HeaderImage}>
        Transform your fitness journey with our diverse range of training
        programs, tailored to your individual needs and goals. Whether you're
        looking to build strength, improve endurance, or enhance your overall
        wellness, our expert trainers are here to guide and motivate you every
        step of the way.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {packData.map(
            ({ id, name, price, durationByMonth, object, ptStatus }) => {
              return (
                <Card key={id} className="plan">
                  <h3 className={styles.h1__1}>{name}</h3>
                  <h3 className={styles.h3__3}>Suitable: {object}</h3>
                  <h4 className={styles.h4_4}>
                    {` ${price}`}/{durationByMonth} month
                  </h4>
                  <p>{ptStatus}</p>
                  <button
                    className={styles.btn}
                    onClick={() => handleOnClick(id)}
                  >
                    Choose Plan
                  </button>
                </Card>
              );
            }
          )}
        </div>
      </section>
      <Modal isOpen={modalIsOpen}>
        <ModalHeader className={styles.tittle_1}>Already purchased a package</ModalHeader>
        <ModalBody>
          Please go to your profile to view your purchased packages.
        </ModalBody>
        <ModalFooter>
          <Button className={styles.btn__1} onClick={() => setModalIsOpen(false)}>
            Close
          </Button>
          <Button className={styles.btn__2} onClick={() => window.location.href = "/user/profile"}>
            Your Profile
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Plans;
