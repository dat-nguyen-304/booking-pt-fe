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
import "react-datepicker/dist/react-datepicker.css"
import { getAllCenter } from "../../../components/user/data";
import axios from "axios";
import styles from "../../../layouts/index.module.css";
function AddProfessor() {
  const accessToken = localStorage.getItem("accessToken");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState("");
  const [description, setDesscription] = useState("");
  const [loadingCenters, setLoadingCenters] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  // get all center
  useEffect(() => {
    const getCenter = async () => {
      setLoadingCenters(true);
      const center = await getAllCenter();
      setCenters(center);
    };
    if (!loadingCenters) {
      getCenter();
    }
  }, [loadingCenters]);

  const handleCenterChange = (event) => {
    const selectedCenter = event.target.value;
    setSelectedCenter(selectedCenter);
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("centerId", selectedCenter);
    data.append("fullName", fullName)
    data.append("imgLink ", selectedFile);
    data.append("description", description)
    console.log(data);
    console.log(selectedFile);
    axios
      .post("https://gachateambe.herokuapp.com/api/PTs", data, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.statusText);
        console.log(res.data);
        setSuccessMessage("Add Personal Trainer Successfully")
        setShowModal(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Add Personal Trainer</h1>
              </div>
            </div>

            <div className="row margin-0">
              <div className="col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">Personal Trainer Info</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                        <form method="post" onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder=""
                                required
                                onChange={(e) => {
                                  const email = e.target.value;
                                  if (isValidEmail(email)) {
                                    setEmail(email);
                                  } else {
                                    alert("Invalid email")
                                  }
                                }}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <label htmlFor="fullName">Full Name</label>
                              <Input
                                type="text"
                                className="form-control"
                                id="fullName"
                                placeholder=""
                                required
                                onChange={(e) => setFullName(e.target.value)}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="center">Center:</Label>
                              <Input
                                type="select"
                                id="center"
                                value={selectedCenter}
                                onChange={handleCenterChange}
                                required
                              >
                                <option value="">Select a center</option>
                                {centers.map((center) => (
                                  <option key={center.id} value={center.id}>
                                    {center.name}
                                  </option>
                                ))}
                              </Input>
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="ptImage">Image of PT</Label>
                              <Input
                                type="file"
                                className="form-control"
                                id="ptImage"
                                placeholder=""
                                onChange={handleFileSelect}
                                required
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="description">Description</Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="description"
                                placeholder=""
                                onChange={(e) => setDesscription(e.target.value)}
                              />
                            </div>
                          </div>
                          <button
                            className="btn btn-danger mr-2"
                            onClick={() => {
                              window.location.href = "/admin/pts";
                            }}
                          >
                            Back
                          </button>
                          <button type="submit" className="btn btn-primary">
                            Add PT
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
          <Button
            color="primary"
            onClick={() => (window.location.href = "/admin/pts")}
          >
            Back
          </Button>
          <Button
            color="danger"
            onClick={() => setShowModal(false)}
          >
            Continue Add 
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddProfessor;
