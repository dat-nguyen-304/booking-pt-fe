import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import "./Trainee.css";
import {} from "components";
import ToggleTableTn from "./toggleTableTn.jsx";
import moment from 'moment';
import {
  getTraineeByID,
  getPackagePurchased,
} from "../../../variables/admin/students";
function StudentProfile() {
  const [pt, setPt] = useState([]);
  const [array, setArray] = useState([]);
  useEffect(() => {
    const path = window.location.pathname;
    const traineeId = path.split("/").pop();
    const getPt = async () => {
      const ptId = await getTraineeByID(traineeId);
      setPt(ptId);
      const packages = await getPackagePurchased(traineeId);
      setArray(packages.totalItems);

    };
    getPt();
  }, []);
  function getStatusColor(status) {
    if (status) {
      return "badge-info";
    } else {
      return "badge-danger";
    }
    
  }

  function getTextColor(status) {
    if (status) {
      return "On-going";
    } else {
      return "End";
    }
    
  }
  console.log(array);
  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">{pt.fullName}</h1>
              </div>
            </div>

            {/* <div className="col-xl-12">
              <section className="box profile-page">
                <div className="content-body">
                  <div className="col-12">
                    <div className="row uprofile">
                      <div className="uprofile-name col-xl-10 col-lg-12 col-md-12 col-sm-8 col-12">
                        <h3 className="uprofile-owner">{pt.fullName}</h3>
                        <div className="clearfix"></div>
                        <p className="uprofile-title">
                          Course purchased: {total}
                        </p>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div> */}
            
            <ToggleTableTn title="1. Packages purchased">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Status</th>
                  <th>PT</th>
                  <th>Date Started</th>
                  <th>Date End</th>
                  <th>Remaining</th>
                  <th>Center</th>
                </tr>
              </thead>
              <tbody>
                {array.map((packages, index) => (
                  <tr key={index}>
                    <td>{packages.package.packageName} - {packages.mainSlot.slotName} </td>
                    <td>
                      <span
                        className={`badge ${getStatusColor(
                          packages.package.activate
                        )}`}
                      >
                        { getTextColor(packages.package.activate)}
                      </span>
                    </td>
                    <td>{packages.mainPT.fullName}</td>
                    <td>{moment(packages.startDate).format('DD/MM/YYYY')}</td>
                    <td>{moment(packages.endDate).format('DD/MM/YYYY')}</td>
                    <td>{packages.remainDay} day</td>
                    <td>{packages.mainCenter.centerName}</td>
                  </tr>
                ))}
              </tbody>
            </ToggleTableTn>

            <ToggleTableTn title="2. Feedback PT">
              <thead>
                <tr>
                  <th>PT Name</th>
                  <th>Course</th>
                  <th>Email</th>
                  <th>Feedback</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="user-inline-img">
                    <img
                      src={"/images/profile/avatar-4.jpg"}
                      alt="user avatar"
                      className="avatar-image img-inline"
                    />
                    Chuyền
                  </td>
                  <td>Muay Thai</td>
                  <td>duy2223@gmail.com</td>
                  <td>Giảng viên thường xuyên đi trễ</td>
                  <td>14/02/2023</td>
                </tr>
                <tr>
                  <td className="user-inline-img">
                    <img
                      src={"/images/profile/avatar-4.jpg"}
                      alt="user avatar"
                      className="avatar-image img-inline"
                    />
                    Duy
                  </td>
                  <td>Muay Thai</td>
                  <td>duy2223@gmail.com</td>
                  <td>Hello đây là bảng feedback</td>
                  <td>11/04/2024</td>
                </tr>
                <tr>
                  <td className="user-inline-img">
                    <img
                      src={"/images/profile/avatar-4.jpg"}
                      alt="user avatar"
                      className="avatar-image img-inline"
                    />
                    Duy
                  </td>
                  <td>Muay Thai</td>
                  <td>duy2223@gmail.com</td>
                  <td>Dạy tốt</td>
                  <td>11/04/2024</td>
                </tr>
              </tbody>
            </ToggleTableTn>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default StudentProfile;
