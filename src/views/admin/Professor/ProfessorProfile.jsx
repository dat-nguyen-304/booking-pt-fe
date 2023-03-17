import React from "react";
import { Row, Col } from "reactstrap";
import "./Pt.css";
import {} from "components";
import { withRouter } from "react-router-dom";
import { getPtById } from "../../../variables/admin/professors";

import ToggleableTable from "./toggleTable";
class PtProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pt: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const ptID = match.params.id;
    const loadedPT = await getPtById(ptID);
    this.setState({
      pt: loadedPT,
    });
  }
  render() {
    console.log(this.state.pt);
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
                            src={this.state.pt.img}
                            className="img-fluid"
                          />
                        </div>
                        <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                          <h3 className="uprofile-owner">
                            <a href="#!">{this.state.pt.fullName}</a>
                          </h3>
                          <button className="btn btn-danger btn-sm profile-btn"
                          onClick={() => {
                            window.location.href = "/admin/pts";
                          }}  
                          >
                            Back
                          </button>
                          <button className="btn btn-primary btn-sm profile-btn"
                          onClick={() => {
                            window.location.href = `/admin/edit-pt/${this.state.pt.id}`;
                          }}  
                          >
                            Edit Profile
                          </button>

                          <div className="clearfix"></div>
                          <p className="uprofile-title">rate: {this.state.pt.rating}</p>
                          <div className="clearfix"></div>
                          <p>
                           {this.state.pt.description}
                          </p>
                          <p className="uprofile-list">
                            <span>
                              <i className="i-briefcase"></i> {this.state.pt.centerName}
                            </span>
                            {/* <span>
                              <i className="i-user"></i> 30 học viên
                            </span> */}
                            <span>
                              <i className="i-location-pin"></i> {this.state.pt.centerAddress}
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
                        src={"/images/profile/avatar-4.jpg"}
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
                        src={"/images/profile/avatar-4.jpg"}
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
                        src={"/images/profile/avatar-4.jpg"}
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
                    <td>10/02/2023</td>
                    <td>Muay Thai</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>10/02/2023</td>
                    <td>Muay Thai</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>10/02/2023</td>
                    <td>Muay Thai</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </ToggleableTable>
              <ToggleableTable title="4. Feed back">
                <thead>
                  <tr>
                    <th>Trainees</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Feed Back</th>
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
                      Duy
                    </td>
                    <td>duy2223@gmail.com</td>
                    <td>Muay Thai</td>
                    <td>Thầy dạy kỹ, chăm sóc học viên</td>
                    <td>14/02/2022</td>
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
                    <td>duy2223@gmail.com</td>
                    <td>Muay Thai</td>
                    <td>Thầy dạy kỹ, chăm sóc học viên</td>
                    <td>14/02/2022</td>
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
                    <td>duy2223@gmail.com</td>
                    <td>Muay Thai</td>
                    <td>Thầy dạy kỹ, chăm sóc học viên</td>
                    <td>14/02/2022</td>
                  </tr>
                </tbody>
              </ToggleableTable>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(PtProfile);
