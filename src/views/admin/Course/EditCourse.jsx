import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { getPackageById } from "../../../variables/admin/courses";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styles from "../../../layouts/index.module.css";
function EditCourse(props) {
  const [packages, setPackage] = useState([]);
  const [packageName, setPackageName] = useState("");
  const [price, setPrice] = useState(0);
  const [durationByDay, setDurationByDay] = useState(0);
  const [durationByMonth, setDurationByMonth] = useState(0);
  const [category, setCategory] = useState("");
  const [object, setObject] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadPack() {
      
      const { match } = props;
      const packageID = match.params.id;
      const loadedPackages = await getPackageById(packageID);
      setPackage(loadedPackages);
      setPackageName(loadedPackages.packageName);
      setPrice(loadedPackages.price);
      setDurationByDay(loadedPackages.durationByDay);
      setDurationByMonth(loadedPackages.durationByMonth);
      setCategory(loadedPackages.category);
      setObject(loadedPackages.object);
    }
    loadPack();
  }, [props]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      operation: 'update',
      packageName: packageName,
      price: price,
      durationByDay: durationByDay,
      durationByMonth: durationByMonth,
      object: object,
      category: category
    };
    const accessToken = localStorage.getItem("accessToken");
    const { match } = props;
    const packageID = match.params.id;
    axios
    .patch(
      `https://gachateambe.herokuapp.com/api/packages/${packageID}`, data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    .then((res) => {
      console.log(res.statusText);
      console.log(res.data);
      setSuccessMessage("Edit Course Successfully");
      setShowModal(true);
    })
    .catch((err) => {
      setErrorMessage("Somthing went wrong try again later")
      setShowModal(true);
      console.log(err);
    });
  }
  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Edit Course</h1>
              </div>
            </div>

            <div className="row margin-0">
              <div className="col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">Basic Info</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                        <form method="post" onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="inputname4">Course Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputname4"
                                placeholder=""
                                defaultValue={packages.packageName}
                                onChange={(e) => setPackageName(e.target.value)}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <label htmlFor="price">Price</label>
                              <input
                                type="number"
                                className="form-control"
                                id="price"
                                placeholder=""
                                defaultValue={packages.price}
                                onChange={(e) => setPrice(e.target.value)}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <label htmlFor="day">Duration by Day</label>
                              <input
                                type="number"
                                className="form-control"
                                id="day"
                                placeholder=""
                                defaultValue={packages.durationByDay}
                                onChange={(e) => setDurationByDay(e.target.value)}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <label htmlFor="month">Duration by Month</label>
                              <input
                                type="number"
                                className="form-control"
                                id="month"
                                placeholder=""
                                defaultValue={packages.durationByMonth}
                                onChange={(e) => setDurationByMonth(e.target.value)}
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <Label htmlFor="category">Category</Label>
                              <Input
                                type="select"
                                name="category"
                                id="category"
                                value={packages.category}
                              >
                                <option>Select</option>
                                <option value="havept">
                                  Have Personal Trainer
                                </option>
                                <option value="nopt">
                                  Don't have personal trainer
                                </option>
                              </Input>
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="object">Suitable for:</Label>
                              <Input
                                type="select"
                                className="form-control"
                                id="object"
                                value={packages.object}
                              >
                                <option>Select</option>
                                <option value="newbie">For newbie</option>
                                <option value="intermediate">
                                  For intermediate
                                </option>
                                <option value="professional">
                                  for professional
                                </option>
                              </Input>
                            </div>
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Update
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
        <ModalHeader toggle={() => setShowModal(false)}>
          Notification
        </ModalHeader>
        <ModalBody className={styles.p_1}>{successMessage}</ModalBody>
        <ModalFooter>
          <div>
            <Button
              color="primary"
              className="mr-2"
              onClick={() => (window.location.href = "/admin/courses")}
            >
              Back
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      <Modal isOpen={showErrorModal} toggle={() => setShowErrorModal(false)}>
        <ModalHeader toggle={() => setShowErrorModal(false)}>Error</ModalHeader>
        <ModalBody className={styles.p_1}>{errorMessage}</ModalBody>
        <ModalFooter>
          <div>
            <Button color="secondary" onClick={() => setShowErrorModal(false)}>
              Close
            </Button>{" "}
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default withRouter(EditCourse);
