import React, { useState, useEffect } from "react";
import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import {getAllCenter } from "../../components/user/data";
import Card from "../../views/pages/UI/Card";
import style from "../../layouts/index.module.css";
import "./program.css";
const Program = () => {
  const [centerData, setCenterData] = useState([]);
 
  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      const data = await getAllCenter();
      if (isMounted) {
        setCenterData(data);
      }
    };
    getData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="programs">
      <div className="container programs container">
        <SectionHead icon={<FaCrown />} title="Centers" />

        <div className="program__wrapper">
          {centerData.map(({ id, name, address, img }) => {
            return (
              <Card className="center" key={id}>
                <div className="center__img">
                  <img src={img} alt={name} />
                </div>
                <h3 className={style.h3_3}>{name}</h3>
                <p>{address}</p>
                <button className={style.btn}>
                  View Center
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Program;
