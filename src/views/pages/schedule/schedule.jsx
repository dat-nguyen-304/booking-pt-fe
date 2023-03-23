import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import BigCalendar, { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./customCalendar.css";
import { getPackageById } from "./events.js";
import styles from "../../../layouts/index.module.css";
import moment1 from "moment-timezone";
import jwt from "jsonwebtoken";
import ModalContent from "./modal";

function Schedule() {
  const localizer = momentLocalizer(moment);
  const [schedule, setSchedule] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
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
  // load lịch học
  useEffect(() => {
    const loadSchedule = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const userId = jwt.decode(accessToken).accountId;
      const loadedSchedule = await getPackageById(userId, accessToken);
      setSchedule(loadedSchedule);
    };
    loadSchedule();
  }, [isModalOpen]);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleModal = (event) => {
    const eventDate = moment(event.start, "YYYY-MM-DD HH:mm");
    const isCompleted = eventDate.isSameOrBefore(moment());
    const today = moment();
    const isToday = eventDate.isSame(today, "day");
    const modalContent = (
      <div>
        {isCompleted ? (
          <div>
            <ModalBody>
              <p className={styles.p_1}>View your photos each slot</p>
            </ModalBody>

            <ModalFooter>
              <Button className={styles.btn__1}>
                <a
                  className={styles.a_1}
                  style={{ textDecoration: "none" }}
                  href={`/user/gallery/${event.id}`}
                >
                  View Photos
                </a>
              </Button>
            </ModalFooter>
          </div>
        ) : (
          <ModalContent
            center={event.centerId}
            pt={event.PtID}
            slot={event.slotID}
            sessionID={event.id}
            isToday={isToday}
            slotTime={event.slot}
            closeModal={closeModal}
            noteFromPT={event.notePT}
            startDate={event.start}
          />
        )}
      </div>
    );
    setIsModalOpen(!isModalOpen);
    setModalContent(modalContent);
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
      PtID: schedule.ptID,
      start: moment1.tz(schedule.date, "Asia/Ho_Chi_Minh").toDate(),
      end: moment1
        .tz(schedule.date, "Asia/Ho_Chi_Minh")
        .add({ hours: 1, minutes: 30 })
        .toDate(),
      centerId: schedule.centerId,
      center: schedule.center,
      slotID: schedule.slot,
      slot: schedule.slotName,
      notePT: schedule.noteFromPt,
      completed: isCompleted,
    };
  });

  return (
    <div className="content">
      <Modal isOpen={isModalOpen} toggle={closeModal}>
        <ModalHeader className={styles.tittle_1} toggle={closeModal}>
          Your Schedule
        </ModalHeader>
        {modalContent}
      </Modal>
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
                    Have learned
                  </Button>
                  <Button
                    className={styles.btn_1}
                    onClick={handleShowIncomplete}
                  >
                    Not learn
                  </Button>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div style={{ height: 500, width: 100 + "%" }}>
                      <BigCalendar
                        localizer={localizer}
                        events={events}
                        views={["month"]}
                        defaultDate={new Date()}
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
                              <div className="event-title">
                                {props.title}{" "}
                                {props.event.notePT && (
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
    </div>
  );
}

export default Schedule;
