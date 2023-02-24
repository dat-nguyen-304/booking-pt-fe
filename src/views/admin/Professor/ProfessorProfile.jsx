import React from "react";
import { Row, Col  } from "reactstrap";
import "./Pt.css";
import {} from "components";
import ToggleableTable from "./toggleTable";
var IMGDIR = process.env.REACT_APP_IMGDIR;

function ProfessorProfile() {
  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">PT Profile</h1>
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
                          src={
                            IMGDIR + "/images/admin/professors/professor-1.jpg"
                          }
                          className="img-fluid"
                        />
                      </div>
                      <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                        <h3 className="uprofile-owner">
                          <a href="#!">Pt. Stephnie Clarke</a>
                        </h3>
                        <button className="btn btn-primary btn-sm profile-btn">
                          Edit Profile
                        </button>
                        {/* <button className="btn btn-primary btn-sm profile-btn">Add as friend</button> */}
                        <div className="clearfix"></div>
                        <p className="uprofile-title">Personal Trainer</p>
                        <div className="clearfix"></div>
                        <p>
                          Humans can evaluate these visual elements in several
                          situations to find a sense of balance. Humans can
                          evaluate these visual elements in several situations
                          to find a sense of balance.
                        </p>
                        <p className="uprofile-list">
                          <span>
                            <i className="i-home"></i> Hồ Chí Minh
                          </span>
                          <span>
                            <i className="i-user"></i> 30 học viên
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

            <ToggleableTable title="1. Courses attend">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Students</th>
                  <th>Status</th>
                  <th>Slots</th>
                  <th>Date Started</th>
                  <th>Date End</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="">Muay Thái</td>
                  <td>10</td>
                  <td>
                    <span className="badge badge-info">On-Going</span>
                  </td>
                  <td>1, 2, 3</td>
                  <td>11/02/2023</td>
                  <td>11/04/2024</td>
                </tr>
                <tr>
                  <td className="">Vovinam</td>
                  <td>10</td>
                  <td>
                    <span className="badge badge-primary">Upcoming</span>
                  </td>
                  <td>1, 2, 3</td>
                  <td>11/04/2023</td>
                  <td>11/04/2024</td>
                </tr>
                <tr>
                  <td className="">Karate</td>
                  <td>10</td>
                  <td>
                    <span className="badge badge-danger">End</span>
                  </td>
                  <td>1, 2, 3</td>
                  <td>11/04/2023</td>
                  <td>11/04/2024</td>
                </tr>
              </tbody>
            </ToggleableTable>

            <ToggleableTable title="2. Trainees">
              <thead>
                <tr>
                  <th>Trainee Name</th>
                  <th>Course</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Date Started</th>
                  <th>Date End</th>
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
                    Duy
                  </td>
                  <td>Muay Thai</td>
                  <td>duy2223@gmail.com</td>
                  <td>
                    <span className="badge badge-success">On-Going</span>
                  </td>
                  <td>11/02/2023</td>
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
                  <td>
                    <span className="badge badge-success">On-Going</span>
                  </td>
                  <td>11/02/2023</td>
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
                  <td>
                    <span className="badge badge-success">On-Going</span>
                  </td>
                  <td>11/02/2023</td>
                  <td>11/04/2024</td>
                </tr>
              </tbody>
            </ToggleableTable>
            <ToggleableTable title="3. Date off">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Course</th>
                  <th>Slot</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >
                  10/02/2023
                  </td>
                  <td>Muay Thai</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td >
                  10/02/2023
                  </td>
                  <td>Muay Thai</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td >
                  10/02/2023
                  </td>
                  <td>Muay Thai</td>
                  <td>1</td>
                </tr>
              </tbody>
            </ToggleableTable>
            <ToggleableTable title="4. Feed back">
              <thead>
                <tr>
                  <th>Trainees</th>
                  <th>Course</th>
                  <th>Feed Back</th>
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
                    Duy
                  </td>
                  <td>Muay Thai</td>
                  <td>Thầy dạy kỹ, chăm sóc học viên</td>
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
                  <td>Thầy dạy kỹ, chăm sóc học viên</td>
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
                  <td>Thầy dạy kỹ, chăm sóc học viên</td>
                </tr>
              </tbody>
            </ToggleableTable>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProfessorProfile;
