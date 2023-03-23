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
import axios from "axios";
import styles from "../../../layouts/index.module.css";
const UploadImage = (props) => {
  const sessionId = props.match.params.id
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("sessionId", sessionId);
    for( let i = 0; i < file.length; i++ ) {
      formData.append("imgFile", file[i]);
    }
   

    const accessToken = localStorage.getItem("accessToken");
    axios
      .post("https://gachateambe.herokuapp.com/api/images", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setSuccessMessage("Update trainee image successful");
        setShowModal(true);
        console.log(response);
      })
      .catch((error) => {
        setErrorMessage("Somthing went wrong, please try again");
        setShowModal(true);
        console.log(error);
      });
  };

  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Upload Image</h1>
              </div>
            </div>

            <div className="row margin-0">
              <div className="col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">Upload image</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                        <form onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="sessionId">SessionId</label>
                              <input
                                type="text"
                                className="form-control"
                                id="sessionId"
                                name="sessionId"
                                placeholder=""
                                value={sessionId}
                                readOnly
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="file">Trainee Image</Label>
                              <Input
                                type="file"
                                name="file"
                                id="file"
                                multiple
                                onChange={handleFileChange}
                                required
                              />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Upload
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
            onClick={() => (window.location.href = "/pt/scheduled")}
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
};

export default UploadImage;
