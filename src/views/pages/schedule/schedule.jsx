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
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./customCalendar.css";
import { getPackageById } from "./events.js";
import { getAllCenter } from "../../../components/user/data";
import { loadPtByID, loadSlotByPT } from "../../../variables/admin/professors";
import styles from "../../../layouts/index.module.css";
import moment1 from "moment-timezone";
import jwt from "jsonwebtoken";

function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalFooter, setModalFooter] = useState(null);
  // change schedule
  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState();
  const [loadingCenters, setLoadingCenters] = useState(false);
  const [pts, setPTS] = useState([]);
  const [selectedPT, setSelectedPT] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };
  // Handle function for center selection
  function handleCenterChange(event) {
    const selectedCenter = event.target.value;
    console.log(selectedCenter);
    setSelectedCenter(selectedCenter);
    setSelectedPT("");
    setSelectedSlot("");
  }

  // Handle function for PT selection
  function handlePTChange(event) {
    const selectedPT = event.target.value;
    setSelectedPT(selectedPT);
    setSelectedSlot("");
  }
  // Handle function for slot selection
  function handleSlotChange(event) {
    const selectedSlot = event.target.value;
    setSelectedSlot(selectedSlot);
  }

  //get Center
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

  //load PTS for selected center
  useEffect(() => {
    if (selectedCenter) {
      const getPts = async () => {
        const pts = await loadPtByID(selectedCenter);
        console.log(pts);
        setPTS(pts);
      };
      getPts();
    }
  }, [selectedCenter]);


  //useEffect hook to load Slot for each PT
  useEffect(() => {
    if (selectedPT) {
      const getSlotByPtID = async () => {
        const slots = await loadSlotByPT(selectedPT);
        setSlots(slots);
      };
      getSlotByPtID();
    }
  }, [selectedPT]);

  useEffect(() => {
    async function loadSchedule() {
      const accessToken = localStorage.getItem("accessToken");
      const userId = jwt.decode(accessToken).accountId;
      const loadedSchedule = await getPackageById(userId, accessToken);
      setSchedule(loadedSchedule);
    }
    loadSchedule();
  }, []);

  const toggleModal = (event) => {
    const eventDate = moment(event.start, "YYYY-MM-DD HH:mm");
    const isCompleted = eventDate.isSameOrBefore(moment());
    const modalContent = (
      <div>
        <Form>
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
                  defaultValue={setSelectedCenter(event.id)}
                 
                >
                  {centers.map((center) => (
                    <option
                      key={center.id}
                      value={center.id}
                    >
                      {center.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
            <FormGroup>
                <Label className={styles.p_1} htmlFor="pt">PT:</Label>
                <Input
                  type="select"
                  id="pt"
                  value={selectedPT}
                  onChange={handlePTChange}
                >
                  {pts.map((pt) => (
                    <option key={pt.id} value={pt.id}>
                      {pt.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
    const modelFooter = (
      <div>
        {isCompleted ? (
          <Button className={styles.btn__1}>
            <a
              className={styles.a_1}
              style={{ textDecoration: "none" }}
              href="/user/gallery"
            >
              View Photos
            </a>
          </Button>
        ) : (
          <Button className={styles.btn__1}>Change Schedule</Button>
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
                <Button className={styles.btn} onClick={handleShowCompleted}>
                  {showCompleted ? "Not Started" : "Started"}
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
        <ModalBody>{modalContent}</ModalBody>
        <ModalFooter>{modalFooter}</ModalFooter>
      </Modal>
    </div>
  );
}

export default Schedule;
