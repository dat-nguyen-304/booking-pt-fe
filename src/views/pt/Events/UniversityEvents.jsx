import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import BigCalendar, { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getPackageByPTId } from "./events";
import styles from "../../../layouts/index.module.css";
import moment1 from "moment-timezone";
import jwt from "jsonwebtoken";
import axios from "axios";
import "../../pages/schedule/customCalendar.css";
function Schedule() {
  const localizer = momentLocalizer(moment);
  const [schedule, setSchedule] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalFooter, setModalFooter] = useState(null);
  const [noteToTrainee, setNoteToTrainee] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedSessions, setSelectedSessions] = useState("");
  const [showCompleted, setShowCompleted] = useState(false); // giá trị mặc định ban đầu
  const [showAll, setShowAll] = useState(false);
  const [showIncomplete, setShowIncomplete] = useState(true);

  const handleShowAll = () => {
    setShowCompleted(false);
    setShowAll(true);
    setShowIncomplete(false);
  };

  const handleShowCompleted = () => {
    setShowCompleted(true);
    setShowAll(false);
    setShowIncomplete(false);
  };

  const handleShowIncomplete = () => {
    setShowCompleted(false);
    setShowAll(false);
    setShowIncomplete(true);
  };
  const minTime = new Date();
  minTime.setHours(7, 0, 0, 0); // 7 giờ sáng
  const maxTime = new Date();
  maxTime.setHours(22, 0, 0, 0); // 11 giờ đêm
  // load lịch học
  useEffect(() => {
    async function loadSchedule() {
      const accessToken = localStorage.getItem("accessToken");
      const userId = jwt.decode(accessToken).accountId;
      const loadedSchedule = await getPackageByPTId(userId, accessToken);
      setSchedule(loadedSchedule);
    }
    loadSchedule();
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const data = {
      noteFromPT: noteToTrainee,
    };
    console.log(data);
    axios
      .patch(
        `https://gachateambe.herokuapp.com/api/sessions/${selectedSessions}`,
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
        setSuccessMessage("Note to trainee success");
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("The server has an error. Please try again later.");
        setShowErrorModal(true);
      });
  }
  const toggleModal = (event) => {
    const eventDate = moment(event.start, "YYYY-MM-DD HH:mm");
    const isCompleted = eventDate.isSameOrBefore(moment());
    setSelectedSessions(event.id);
    const modalContent = (
      <div>
        {isCompleted ? (
          <p className={styles.p_1}>
            Upload Picture for trainee: {event.trainee}
          </p>
        ) : (
          <>
            <p className={styles.p_1}>Note from Trainee:</p>
            <p className={styles.p_note}> {event.noteTe}</p>
            <FormGroup>
              <Label className={styles.p_1} htmlFor="noteToPt">
                Note to Trainee:
              </Label>
              <Input
                type="input"
                id="noteToPt"
                className={module.radius_1}
                onChange={(e) => setNoteToTrainee(e.target.value)}
              />
            </FormGroup>
          </>
        )}
      </div>
    );
    const modelFooter = (
      <div>
        {isCompleted ? (
          <Button className={styles.btn__1}>
            <a
              className={styles.a_1}
              style={{ textDecoration: "none" }}
              href={`/pt/upload-image/${event.id}`}
            >
              Upload Photos
            </a>
          </Button>
        ) : (
          <div>
            <Button
              className={styles.btn__close}
              style={{ marginRight: "5px" }}
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </Button>
            <Button type="submit" className={styles.btn__1}>
              Note To Trainee
            </Button>
          </div>
        )}
      </div>
    );
    setIsModalOpen(!isModalOpen);
    setModalContent(modalContent);
    setModalFooter(modelFooter);
  };
  const filteredEvents = schedule.filter((schedule) => {
    const eventDate = moment(schedule.date, "YYYY-MM-DD HH:mm");
    const isCompleted = eventDate.isSameOrBefore(moment());
    if (showAll) return true;
    if (showCompleted && isCompleted) return true;
    if (showIncomplete && !isCompleted) return true;
    return false;
  });

  const events = filteredEvents.map((schedule) => {
    const isCompleted = moment(
      schedule.date,
      "YYYY-MM-DD HH:mm"
    ).isSameOrBefore(moment());
    return {
      id: schedule.sessionsId,
      title: schedule.pt,
      start: moment1.tz(schedule.date, "Asia/Ho_Chi_Minh").toDate(),
      end: moment1
        .tz(schedule.date, "Asia/Ho_Chi_Minh")
        .add({ hours: 1, minutes: 30 })
        .toDate(),
      centerId: schedule.centerId,
      center: schedule.center,
      slot: schedule.slotName,
      traineeId: schedule.traineeID,
      trainee: schedule.trainee,
      noteTe: schedule.noteFromTrainee,
      completed: isCompleted,
    };
  });

  return (
    <div className="content">
      <Row>
        <Col xs={12} md={12}>
          <div className="page-title">
            <div className="float-left">
              <h1 className="title">Schedule</h1>
            </div>
          </div>

          <div className="col-12">
            <section className="box ">
              <header className="panel_header">
                <h2 className="title float-left">Schedule</h2>
              </header>

              <div className="content-body">
                <div
                  className="rbc-btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button className={styles.btn_1} onClick={handleShowAll}>
                    All slot
                  </Button>
                  <Button
                    className={styles.btn_1}
                    onClick={handleShowCompleted}
                  >
                    Have Teached
                  </Button>
                  <Button
                    className={styles.btn_1}
                    onClick={handleShowIncomplete}
                  >
                    Not Teach
                  </Button>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div style={{ height: 500, width: 100 + "%" }}>
                      <BigCalendar
                        localizer={localizer}
                        events={events}
                        defaultView={"week"}
                        views={["week"]}
                        defaultDate={new Date()}
                        min={minTime}
                        max={maxTime}
                        eventPropGetter={(event) => ({
                          className: "event-with-time",
                          style: {
                            backgroundColor: [event.completed ? "#90f590" : "rgb(218, 218, 80)"],
                            color: "#fff",
                          },
                        })}
                        components={{
                          event: (props) => (
                            <div>
                              <div className="event-note">
                                {props.event.trainee}{" "}
                                {props.event.noteTe && (
                                  <span className="note-indicator">*</span>
                                )}
                              </div>
                              <div className="event-time">
                                <div>
                                  {moment(props.event.start)
                                    .tz(moment.tz.guess())
                                    .format("HH:mm")}{" "}
                                  -{" "}
                                  {moment(props.event.end)
                                    .tz(moment.tz.guess())
                                    .format("HH:mm")}
                                </div>
                              </div>
                            </div>
                          ),
                        }}
                        onSelectEvent={toggleModal}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Col>
      </Row>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader className={styles.tittle_1} toggle={toggleModal}>
          Schedule Detail
        </ModalHeader>
        <Form method="post" onSubmit={handleSubmit}>
          <ModalBody>{modalContent}</ModalBody>
          <ModalFooter>{modalFooter}</ModalFooter>
        </Form>
      </Modal>

      <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
        <ModalHeader toggle={() => setShowModal(false)}>
          Notification
        </ModalHeader>
        <ModalBody className={styles.p_1}>{successMessage}</ModalBody>
        <ModalFooter>
          <div>
            <Button color="primary" onClick={() => setShowModal(false)}>
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

export default Schedule;
