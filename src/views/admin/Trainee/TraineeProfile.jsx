import React from "react";
import { Row, Col } from "reactstrap";
import "./Trainee.css";
import {} from "components";
import ToggleTableTn from "./toggleTableTn.jsx";
var IMGDIR = process.env.REACT_APP_IMGDIR;

function StudentProfile() {
  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Trainee Profile</h1>
              </div>
            </div>

            <div className="col-xl-12">
              <section className="box profile-page">
                <div className="content-body">
                  <div className="col-12">
                    <div className="row uprofile">
                      <div className="uprofile-image col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12">
                        <img
                          alt=""
                          src={IMGDIR + "/images/admin/students/student-13.jpg"}
                          className="img-fluid"
                        />
                      </div>
                      <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                        <h3 className="uprofile-owner">
                          <a href="#!">Jane Douglas</a>
                        </h3>
                        <button className="btn btn-primary btn-sm profile-btn">
                          Send message
                        </button>
                        <button className="btn btn-primary btn-sm profile-btn">
                          Add as friend
                        </button>
                        <div className="clearfix"></div>
                        <p className="uprofile-title">Course purchased: 3</p>
                        <div className="clearfix"></div>
                        <p>Date create account: 14/02/2022</p>
                        <p className="uprofile-list">
                          <span>
                            <i className="i-home"></i> Hồ Chí Minh City
                          </span>
                          <span>
                            <i className="i-user"></i>Gacha56236@gmail.com
                          </span>
                          <span>
                            <i className="i-briefcase"></i> Gacha Tân Bình
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <ToggleTableTn title="1. Packages purchased">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Status</th>
                  <th>Slots</th>
                  <th>Date Started</th>
                  <th>Date End</th>
                  <th>Feed back</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="">Muay Thái</td>
                  <td>
                    <span className="badge badge-info">On-Going</span>
                  </td>
                  <td>1, 2, 3</td>
                  <td>11/02/2023</td>
                  <td>11/04/2024</td>
                  <td>Not yet</td>
                </tr>
                <tr>
                  <td className="">Vovinam</td>
                  <td>
                    <span className="badge badge-primary">Upcoming</span>
                  </td>
                  <td>1, 2, 3</td>
                  <td>11/04/2023</td>
                  <td>11/04/2024</td>
                  <td>Upcoming</td>
                </tr>
                <tr>
                  <td className="">Karate</td>
                  <td>
                    <span className="badge badge-danger">End</span>
                  </td>
                  <td>1, 2, 3</td>
                  <td>11/04/2023</td>
                  <td>11/04/2024</td>
                  <td>Good</td>
                </tr>
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
                      src={IMGDIR + "/images/profile/avatar-4.jpg"}
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
                      src={IMGDIR + "/images/profile/avatar-4.jpg"}
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
                      src={IMGDIR + "/images/profile/avatar-4.jpg"}
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
