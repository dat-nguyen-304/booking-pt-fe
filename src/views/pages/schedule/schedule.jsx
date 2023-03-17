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
  const localizer = momentLocalizer(moment); // Chọn chiến lược địa phương moment
  const [schedule, setSchedule] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  // load lịch học
  useEffect(() => {
    async function loadSchedule() {
      const accessToken = localStorage.getItem("accessToken");
      const userId = jwt.decode(accessToken).accountId;
      const loadedSchedule = await getPackageById(userId, accessToken);
      setSchedule(loadedSchedule);
    }
    loadSchedule();
  }, []);

  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const toggleModal = (event) => {
    const eventDate = moment(event.start, "YYYY-MM-DD HH:mm");
    const isCompleted = eventDate.isSameOrBefore(moment());
    const today = moment();
    const isToday = eventDate.isSame(today, "day");
    console.log(isCompleted);
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
    return showCompleted ? isCompleted : !isCompleted;
  });

  const events = filteredEvents.map((schedule) => {
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
    };
  });

  return (
    <div className="content">
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader className={styles.tittle_1} toggle={toggleModal}>
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
                <Button className={styles.btn} onClick={handleShowCompleted}>
                  {showCompleted ? "Not Started" : "Started"}
                </Button>
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
                            backgroundColor: "#3174ad",
                            color: "#fff",
                          },
                        })}
                        components={{
                          event: (props) => (
                            <div>
                              <div className="event-title">{props.title}</div>
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
