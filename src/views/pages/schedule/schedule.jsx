import React from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./customCalendar.css";
import { getPackageById } from "./events.js";
import styles from "../../../layouts/index.module.css";
import moment1 from "moment-timezone";
import jwt from "jsonwebtoken";
class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      showCompleted: false,
    };
  }
  handleShowCompleted = () => {
    this.setState({ showCompleted: !this.state.showCompleted });
  };
  async componentDidMount() {
    const accessToken = localStorage.getItem("accessToken");
    const userId = jwt.decode(accessToken).accountId;
    const loadSchedule = await getPackageById(userId, accessToken);
    this.setState({
      schedule: loadSchedule,
    });
  }
  state = {
    isModalOpen: false,
    modalContent: null,
  };

  toggleModal = (event) => {
    const eventDate = moment(event.start, "YYYY-MM-DD");
    const isCompleted = eventDate.isBefore(moment().startOf("day"));
    const modalContent = (
      <div>
        <p className={styles.p_1}>PT: {event.title}</p>
        <p className={styles.p_1}>Center: {event.center}</p>
        <p className={styles.p_1}>Slot: {event.slot}</p>
      </div>
    );
    const modelFooter = (
      <div>
        {isCompleted ? (
        <Button className={styles.btn__1}>
          <a style={{textDecoration:"none"}} href="/user/gallery">View Photos</a></Button>
      ) : (
        <Button className={styles.btn__1}>
           Change Schedule
          </Button>
      )}
      </div>
    );
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      modalContent: modalContent,
      modelFooter: modelFooter,
    });
  };

  render() {
    const filteredEvents = this.state.schedule.filter((schedule) => {
      const eventDate = moment(schedule.date, "YYYY-MM-DD");
      const isCompleted = eventDate.isBefore(moment().startOf("day"));
      return this.state.showCompleted ? isCompleted : !isCompleted;
    });
    const events = filteredEvents.map((schedule) => {
      return {
        id: schedule.sessionsId,
        title: schedule.pt,
        start: moment1.tz(schedule.date, "Asia/Ho_Chi_Minh").toDate(),
        end: moment1
          .tz(schedule.date, "Asia/Ho_Chi_Minh")
          .add({ hours: 1, minutes: 30 })
          .toDate(),
        center: schedule.center,
        slot: schedule.slotName,
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
                <Button
                  className={styles.btn}
                  onClick={this.handleShowCompleted}
                >
                  {this.state.showCompleted ? "Not Started" : "Started"}
                </Button>
                  <div className="row">
                    <div className="col-lg-12">
                      <div style={{ height: 500, width: 100 + "%" }}>
                        <BigCalendar
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
                          onSelectEvent={(event) => this.toggleModal(event)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Col>
        </Row>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader className={styles.tittle_1} toggle={this.toggleModal}>
            Schedule Detail
          </ModalHeader>
          <ModalBody>{this.state.modalContent}</ModalBody>
          <ModalFooter>{this.state.modelFooter}</ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Schedule;
