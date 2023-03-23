import React, { useState } from "react";
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
import styles from "../../../layouts/index.module.css";
import axios from "axios";
function AddCourse() {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [packageName, setPackageName] = useState("");
  const [durationByDay, setDurationByDay] = useState("");
  const [durationByMonth, setDurationByMonth] = useState("");
  const [category, setCategory] = useState("");
  const [object, setObject] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      packageName,
      price,
      durationByDay,
      durationByMonth,
      category,
      object,
    };
    console.log(data);
    axios
      .post("https://gachateambe.herokuapp.com/api/packages", data, {})
      .then((response) => {
        console.log(response);
        setSuccessMessage("Add Personal Trainer Successfully");
        setShowModal(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Somthing went wrong try again later");
        setShowModal(true);
      });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "packageName") {
      setPackageName(value);
    } else if (name === "day") {
      setDurationByDay(value);
    } else if (name === "month") {
      setDurationByMonth(value);
    } else if (name === "category") {
      setCategory(value);
    } else if (name === "object") {
      setObject(value);
    } else if (name === "price") {
      setPrice(value);
    }
  };
  const resetForm = () => {
    setShowModal(false);
    setPackageName("");
    setDurationByDay("");
    setDurationByMonth("");
    setCategory("");
    setPrice("");
    setObject("");
  }
  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Add Course</h1>
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
                              <label htmlFor="packageName">Course Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="packageName"
                                id="packageName"
                                value={packageName}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <label htmlFor="price">Price</label>
                              <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                placeholder=""
                                value={price}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <label htmlFor="day">Duration By Day</label>
                              <input
                                type="number"
                                className="form-control"
                                id="day"
                                name="day"
                                value={durationByDay}
                                placeholder=""
                                min="1"
                                max="31"
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <label htmlFor="month">Duration By Month</label>
                              <input
                                type="munber"
                                className="form-control"
                                id="month"
                                name="month"
                                placeholder=""
                                value={durationByMonth}
                                min="1"
                                max="12"
                                onChange={handleInputChange}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="category">Category</Label>
                              <Input
                                type="select"
                                name="category"
                                id="category"
                                value={category}
                                onChange={handleInputChange}
                                required
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
                                name="object"
                                placeholder=""
                                value={object}
                                onChange={handleInputChange}
                                required
                              >
                                <option>Select</option>
                                <option value="newbie">Newbie</option>
                                <option value="intermediate">
                                  Intermediate
                                </option>
                                <option value="professional">
                                  Professional
                                </option>
                              </Input>
                            </div>
                          </div>
                          <button
                            className="btn btn-danger mr-2"
                            onClick={() => {
                              window.location.href = "/admin/courses";
                            }}
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary mr-2"
                          >
                            Add Course
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
        <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
          <ModalHeader toggle={() => setShowModal(false)}>
            Notification
          </ModalHeader>
          <ModalBody className={styles.p_1}>{successMessage}</ModalBody>
          <ModalFooter>
            <div>
              <Button
                color="primary"
                onClick={() => (window.location.href = "/admin/courses")}
                className="mr-2"
              >
                Back
              </Button>
              <Button
                className="mr-2"
                color="danger"
                onClick={resetForm}
              >
                Continue Add
              </Button>
            </div>
          </ModalFooter>
        </Modal>
        <Modal isOpen={showErrorModal} toggle={() => setShowErrorModal(false)}>
          <ModalHeader toggle={() => setShowErrorModal(false)}>
            Error
          </ModalHeader>
          <ModalBody className={styles.p_1}>{errorMessage}</ModalBody>
          <ModalFooter>
            <div>
              <Button
                color="secondary"
                onClick={() => setShowErrorModal(false)}
              >
                Close
              </Button>{" "}
            </div>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default AddCourse;
