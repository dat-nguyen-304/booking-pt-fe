import React from "react";
import { Row, Col, Table } from "reactstrap";
import { withRouter } from "react-router-dom";
import {} from "components";
import { getPackageById, getPackage } from "../../../variables/admin/courses";
import moment from "moment";
import ReactPaginate from "react-paginate";
import axios from "axios";

class CourseProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pack: [],
      total: "",
      packages: [],
      packID: "",
      currentPage: 0, // Trang hiện tại
      perPage: 5, // Số phần tử trên mỗi trang
    };
  }
  handlePageClick = (data) => {
    const { selected } = data;
    this.setState({ currentPage: selected });
  };

  async componentDidMount() {
    const { match } = this.props;
    const packId = match.params.id;
    const loadedPack = await getPackageById(packId);
    const loadedData = await getPackage(packId);
    this.setState({
      pack: loadedPack,
      total: loadedData.total,
      packages: loadedData.traineePackages,
      packID : packId,
    });
  }
   handleDelete = async () => {
    const { match } = this.props;
    const packId = match.params.id;
    if (window.confirm('Are you sure you want to delete?')) {
      axios.delete(`https://gachateambe.herokuapp.com/api/packages/${packId}`)
        .then(response => {
          console.log(response.data);
          // do something with the response
        })
        .catch(error => {
          console.log(error);
          // handle the error
        });
    }
   }
  render() {
    const { packages, currentPage, perPage } = this.state;
    const offset = currentPage * perPage;
    const currentPackages = packages.slice(offset, offset + perPage);
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">View Course</h1>
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
                              "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/332773078_2141261912889325_4648798698662692148_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=oSPfdFG0cccAX_9nDPG&_nc_ht=scontent.fsgn5-3.fna&oh=03_AdQas4dGsNoikQrXg-vJcCTTy8UyjaoCQb0DYhtGPM8j7Q&oe=643179D3"
                            }
                            className="img-fluid"
                          />
                        </div>
                        <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                          <h3 className="uprofile-owner">
                            <a href="#!">{this.state.pack.packageName}</a>
                          </h3>
                          <button className="btn btn-danger btn-sm profile-btn"
                           onClick={this.handleDelete}  
                           >
                            Delete Course 
                          </button>
                          <button className="btn btn-primary btn-sm profile-btn"
                           onClick={() => {
                            window.location.href = `/admin/edit-course/${this.state.packID}`;
                          }}  
                           >
                            Edit Course
                          </button>
                          <div className="clearfix"></div>
                          <p className="uprofile-title">
                            {this.state.pack.category}
                          </p>
                          <div className="clearfix"></div>
                          <p>
                            {this.state.pack.price} VND/{" "}
                            {this.state.pack.durationByMonth} month
                          </p>
                          <p className="uprofile-list">
                            <span>
                              <i className="i-user"></i> {this.state.total}{" "}
                              trainees
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-12 col-xl-12 col-md-12 col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">Static</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12">
                        <ReactPaginate
                          previousLabel={"Previous"}
                          nextLabel={"Next"}
                          breakLabel={"..."}
                          pageCount={Math.ceil(packages.length / perPage)}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          onPageChange={this.handlePageClick}
                          containerClassName={"pagination"}
                          subContainerClassName={"pages pagination"}
                          activeClassName={"active"}
                        />
                        <Table hover responsive>
                          <thead>
                            <tr>
                              <th>Traniee Name</th>
                              <th>Pt Name</th>
                              <th>Center</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                              <th>Buy Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentPackages.map((packages, index) => (
                              <tr key={index}>
                                <td>{packages.trainee.fullName}</td>
                                <td>{packages.mainPT.fullName}</td>
                                <td>{packages.mainCenter.centerName}</td>
                                <td>
                                  {moment(packages.startDate).format(
                                    "DD/MM/YYYY"
                                  )}
                                </td>
                                <td>
                                  {moment(packages.endDate).format(
                                    "DD/MM/YYYY"
                                  )}
                                </td>
                                <td>
                                  {moment(packages.registerDate).format(
                                    "DD/MM/YYYY"
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(CourseProfile);
