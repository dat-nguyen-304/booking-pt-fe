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
import styles from "../../../layouts/index.module.css";
import axios from "axios";
import { getCenterById } from "../../../variables/admin/centers";

function EditCenter() {
  const [centerName, setcenterName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //center id
  const path = window.location.pathname;
  const centerId = path.split("/").pop();
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const getCenter = async () => {
      const center = await getCenterById(centerId);
      setAddress(center.address)
      setcenterName(center.centerName)
      setSelectedFile(center.imgLink)
    };
    getCenter();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(centerName);
    console.log(address);
    const data = new FormData();
    data.append("operation", 'update');
    data.append("centerName", centerName);
    data.append("address", address);
    data.append("centerImg", selectedFile);

    axios
      .patch(
        `https://gachateambe.herokuapp.com/api/centers/${centerId}`, data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.statusText);
        console.log(res.data);
        setSuccessMessage("Edit Center Successfully");
        setShowModal(true);
      })
      .catch((err) => {
        setErrorMessage("Somthing went wrong try again later")
        setShowModal(true);
        console.log(err);
      });
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Edit Center</h1>
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
                              <label htmlFor="name">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder=""
                                defaultValue={centerName}
                                onChange={(e) => setcenterName(e.target.value)}
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <Label htmlFor="centerImg">Center Image</Label>
                              <div className="profileimg-input">
                                <img
                                  alt=""
                                  src={selectedFile}
                                  className="img-fluid"
                                  style={{ width: "120px" }}
                                />
                              </div>
                              <Input
                                type="file"
                                name="file"
                                id="centerImg"
                                onChange={handleFileSelect}
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <label htmlFor="address">Address</label>
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder={address}
                                defaultValue={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Update Center
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
              onClick={() => (window.location.href = "/admin/centers")}
            >
              Back
            </Button>

            <Button className="mr-2" color="danger" onClick={() => setShowModal(false)}>
              Continue Add
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

export default EditCenter;
