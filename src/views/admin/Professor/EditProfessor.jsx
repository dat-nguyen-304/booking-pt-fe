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
import { updatePt, getPtById } from "../../../variables/admin/professors";
import { loadCenters } from "../../../variables/admin/centers";
import { withRouter } from "react-router-dom";
import styles from "../../../layouts/index.module.css";
function EditPt(props) {
  const [centers, setCenters] = useState([]);
  const [centerId, setCenterId] = useState(0);
  const [fullName, setFullName] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("centerId", centerId);
    formData.append("fullName", fullName);
    formData.append("rating", rating);
    formData.append("description", description);
    const { match } = props;
    const ptID = match.params.id;
    console.log(formData);
    try {
      await updatePt(ptID, formData);
      setSuccessMessage("Update Personal Trainer successful");
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchPtAndCenters = async () => {
      const { match } = props;
      const ptID = match.params.id;
      const loadedPT = await getPtById(ptID);
      const centers = await loadCenters();
      setCenters(centers);
      setCenterId(loadedPT.centerID);
      setFullName(loadedPT.fullName);
      setRating(loadedPT.rating);
      setDescription(loadedPT.description);
    };
    fetchPtAndCenters();
  }, [props]);

  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Edit Personal Trainer</h1>
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
                        <form onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="inputname4">Full Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputname4"
                                placeholder=""
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="exampleSelect">Center</Label>
                              <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                                value={centerId}
                                onChange={(event) =>
                                  setCenterId(event.target.value)
                                }
                              >
                                {centers.map((center) => (
                                  <option key={center.id} value={center.id}>
                                    {center.name}
                                  </option>
                                ))}
                              </Input>
                            </div>

                            <div className="form-group col-md-12">
                              <label htmlFor="rating">Rating</label>
                              <input
                                type="float"
                                className="form-control"
                                id="rating"
                                placeholder=""
                                value={rating}
                                max={5}
                                onChange={(e) => setRating(e.target.value)}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="description">Description</Label>
                              <Input
                                type="text"
                                name="text"
                                id="description"
                                placeholder=""
                                defaultValue={description}
                                onChange={(e) => setDescription(e.target.value)}
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
                          <button
                            type="submit"
                            className="btn btn-primary mr-2"
                          >
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
          <Button
            color="primary"
            onClick={() => (window.location.href = "/admin/pts")}
          >
            Close
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default withRouter(EditPt);
