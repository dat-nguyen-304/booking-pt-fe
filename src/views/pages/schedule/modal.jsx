import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { getAllCenter } from "../../../components/user/data";
import { loadPtByID, loadSlotByPT } from "../../../variables/admin/professors";
import styles from "../../../layouts/index.module.css";
import axios from "axios";
import module from "./modal.module.css";
function modalContent({
  center,
  pt,
  slot,
  sessionID,
  isToday,
  slotTime,
  closeModal,
  noteFromPT,
  startDate,
}) {
  // update
  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState(center);
  const [pts, setPTS] = useState([]);
  const [selectedPT, setSelectedPT] = useState(pt);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(slot);
  const [loadingCenters, setLoadingCenters] = useState(false);
  const [noteFromStudent, setNoteFromStudent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [noteFromStudentDisabled, setNoteFromStudentDisabled] = useState(false);
  const maxSlotTime = new Date();
  maxSlotTime.setDate(maxSlotTime.getDate() + 7);
  useEffect(() => {
    if (new Date(startDate) > maxSlotTime) {
      setNoteFromStudent(null);
      setNoteFromStudentDisabled(true);
    } else {
      setNoteFromStudentDisabled(false);
    }
  }, [startDate]);
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

  const handleCloseModal = () => {
    closeModal();
  };

  useEffect(() => {
    if (selectedCenter !== "") {
      const getPts = async () => {
        const pts = await loadPtByID(selectedCenter);
        setPTS(pts);
      };
      getPts();
    } else {
      setPTS([]);
    }
  }, []);

  useEffect(() => {
    const getSlotByPtID = async () => {
      const slots = await loadSlotByPT(selectedPT);
      setSlots(slots);
    };
    getSlotByPtID();
  }, []);

  // Handler function for center selection
  function handleCenterChange(event) {
    const selectedCenter = event.target.value;
    setSelectedCenter(selectedCenter);
    setSelectedPT("");
    setSelectedSlot("");
  }

  // Handler function for PT selection
  function handlePTChange(event) {
    const selectedPT = event.target.value;
    setSelectedPT(selectedPT);
    setSelectedSlot("");
  }

  // Handler function for slot selection
  function handleSlotChange(event) {
    const selectedSlot = event.target.value;
    if (selectedSlot === "") {
      setSelectedSlot(slot);
    } else {
      setSelectedSlot(selectedSlot);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const data = {
      PTId: selectedPT,
      slotId: parseInt(selectedSlot),
      noteFromTrainee: noteFromStudent,
    };
    axios
      .patch(
        `https://gachateambe.herokuapp.com/api/sessions/${sessionID}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.statusText);
        console.log(res.data);
        setSuccessMessage("Update success");
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("The server has an error. Please try again later.");
        setShowErrorModal(true);
      });
  }
  return (
    <div>
      {isToday ? (
        <>
          <Form method="post" onSubmit={handleSubmit}>
            <ModalBody>
              <Col md={12}>
                <p className={styles.p_1}>Note from PT:</p>
                {noteFromPT ? (
                  <p className={styles.p_note}>{noteFromPT}</p>
                ) : (
                  <p className={styles.p_note}>
                  There are no comments from PT</p>
                )}
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label className={styles.p_1} htmlFor="noteToPt">
                    Note to PT:
                  </Label>
                  <Input
                    type="input"
                    className={module.radius_1}
                    onChange={(e) => setNoteFromStudent(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </ModalBody>
            <ModalFooter>
              <div>
                <Button
                  className={styles.btn__close}
                  style={{ marginRight: "5px" }}
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
                <Button type="submit" className={styles.btn__1}>
                  Note to PT
                </Button>
              </div>
            </ModalFooter>
          </Form>
        </>
      ) : (
        <>
          <Form method="post" onSubmit={handleSubmit}>
            <ModalBody>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label className={styles.p_1} htmlFor="center">
                      Center:
                    </Label>
                    <Input
                      type="select"
                      id="center"
                      value={selectedCenter}
                      onChange={handleCenterChange}
                      className={module.radius_1}
                      disabled
                    >
                      {centers.map((center) => (
                        <option key={center.id} value={center.id}>
                          {center.name}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <Label className={styles.p_1} htmlFor="pt">
                      PT:
                    </Label>
                    <Input
                      type="select"
                      id="pt"
                      value={selectedPT}
                      onChange={handlePTChange}
                      disabled={!selectedCenter}
                      className={module.radius_1}
                      required
                    >
                      {pts.map((pt) => (
                        <option key={pt.id} value={pt.id}>
                          {pt.name}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <Label className={styles.p_1} htmlFor="slot">
                      Slot: {slotTime}
                    </Label>
                    <Input
                      type="select"
                      id="slot"
                      value={selectedSlot}
                      onChange={handleSlotChange}
                      disabled={!selectedPT}
                      className={module.radius_1}
                    >
                      <option value="">Select a slot</option>
                      {slots
                        .sort((a, b) => a.slotId - b.slotId)
                        .map((slot) => (
                          <option key={slot.slotId} value={slot.slotId}>
                            {slot.slotTime}
                          </option>
                        ))}
                    </Input>
                  </FormGroup>
                </Col>

                <Col md={12}>
                  <FormGroup>
                    <Label className={styles.p_1} htmlFor="noteToPt">
                      Note to PT:
                    </Label>
                    <Input
                      type="input"
                      className={module.radius_1}
                      onChange={(e) => setNoteFromStudent(e.target.value)}
                      disabled={noteFromStudentDisabled}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <div>
                <Button type="submit" className={styles.btn__1}>
                  Change Schedule
                </Button>
              </div>
            </ModalFooter>
          </Form>
        </>
      )}

      <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
        <ModalHeader toggle={() => setShowModal(false)}>
          Notification
        </ModalHeader>
        <ModalBody className={styles.p_1}>{successMessage}</ModalBody>
        <ModalFooter>
          <div>
            <Button color="primary" onClick={handleCloseModal}>
              Close
            </Button>{" "}
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

export default modalContent;
