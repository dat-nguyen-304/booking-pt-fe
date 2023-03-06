import React, { useState, useEffect } from "react";
import Header from "../../../components/user/Header";
import HeaderImage from "../../../components/user/images/header_bg_5.jpg";
import { getTrainers } from "../../../components/user/data";
import Trainer from "../../../components/user/Trainer";
import "./trainers.css";

const Trainers = () => {
  const [trainerData, setTrainerData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getTrainers();
      setTrainerData(data);
    };
    getData();
  }, []);
  console.log(trainerData);
  return (
    <>
      <Header image={HeaderImage} title="Our Trainers">
        Personal Training (PT) is a personalized fitness training service
        designed for each individual client, helping them achieve their fitness
        goals and improve their overall health through customized workout and
        nutrition plans
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainerData.map(
            ({ id, image, name, centerName, rating, description }) => {
              return (
                <Trainer
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  center={centerName}
                  rating={rating}
                  description={description}
                />
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default Trainers;
