import React from "react";
import { Row, Col } from "reactstrap";
import {} from "components";
import { withRouter } from "react-router-dom";
import {getCenterById} from "../../../variables/admin/centers"
import ToggleCenter from "./ToggleCenter";
class CenterDetail extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      center: [],

    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const centerId = match.params.id;
    const loadedCenters = await getCenterById(centerId);
    this.setState({
      center: loadedCenters,
    });
  }
  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Center Detail</h1>
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
                            src={this.state.center.imgLink}
                            className="img-fluid"
                          />
                        </div>
                        <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                          <h3 className="uprofile-owner">
                            {this.state.center.centerName}
                          </h3>
                          <button
                            className="btn btn-primary btn-sm profile-btn"
                            onClick={() => {
                              window.location.href = `/admin/edit-center/${this.state.center.centerId}`;
                            }}  
                          >
                            Edit Center
                          </button>
                         
                          <div className="clearfix"></div>
                          <p>
                           {this.state.center.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <ToggleCenter title="1. Personal Trainees">
                <thead>
                  <tr>
                    <th>PT Name</th>
                    <th>Email</th>
                    <th>Date Joined</th>
                    <th>Course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="user-inline-img">
                      <img
                        src={ "/images/profile/avatar-4.jpg"}
                        alt="user avatar"
                        className="avatar-image img-inline"
                      />
                      Duy
                    </td>
                    <td>duy2223@gmail.com</td>
                    <td>11/02/2023</td>
                    <td>
                      <ul>
                        <li>Muay Thái</li>
                        <li>Muay Thái</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-inline-img">
                      <img
                        src={ "/images/profile/avatar-4.jpg"}
                        alt="user avatar"
                        className="avatar-image img-inline"
                      />
                      Duy
                    </td>
                    <td>duy2223@gmail.com</td>
                    <td>11/02/2023</td>
                    <td>
                      <ul>
                        <li>Muay Thái</li>
                        <li>Muay Thái</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-inline-img">
                      <img
                        src={ "/images/profile/avatar-4.jpg"}
                        alt="user avatar"
                        className="avatar-image img-inline"
                      />
                      Duy
                    </td>
                    <td>duy2223@gmail.com</td>
                    <td>11/02/2023</td>
                    <td>
                      <ul>
                        <li>Muay Thái</li>
                        <li>Muay Thái</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </ToggleCenter>
              <ToggleCenter title="2. Trainees">
                <thead>
                  <tr>
                    <th>Traniees Name</th>
                    <th>Email</th>
                    <th>Date Joined</th>
                    <th>Course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="user-inline-img">
                      <img
                        src={ "/images/profile/avatar-4.jpg"}
                        alt="user avatar"
                        className="avatar-image img-inline"
                      />
                      Duy
                    </td>
                    <td>duy2223@gmail.com</td>
                    <td>11/02/2023</td>
                    <td>
                      <ul>
                        <li>Muay Thái</li>
                        <li>Muay Thái</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-inline-img">
                      <img
                        src={ "/images/profile/avatar-4.jpg"}
                        alt="user avatar"
                        className="avatar-image img-inline"
                      />
                      Duy
                    </td>
                    <td>duy2223@gmail.com</td>
                    <td>11/02/2023</td>
                    <td>
                      <ul>
                        <li>Muay Thái</li>
                        <li>Muay Thái</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="user-inline-img">
                      <img
                        src={ "/images/profile/avatar-4.jpg"}
                        alt="user avatar"
                        className="avatar-image img-inline"
                      />
                      Duy
                    </td>
                    <td>duy2223@gmail.com</td>
                    <td>11/02/2023</td>
                    <td>
                      <ul>
                        <li>Muay Thái</li>
                        <li>Muay Thái</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </ToggleCenter>
              <ToggleCenter title="3. Courses">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Date Create</th>
                    <th>Students</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Muay Thái</td>
                    <td>11/02/2023</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>Vovinam</td>
                    <td>11/02/2023</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>Karatedo</td>
                    <td>11/02/2023</td>
                    <td>40</td>
                  </tr>
                </tbody>
              </ToggleCenter>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default withRouter(CenterDetail);
