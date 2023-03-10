import React, { useState, useEffect } from "react";
import { getAllCenter } from "../../../components/user/data";
import { loadPtByID, loadSlotByPT } from "../../../variables/admin/professors";
import { getPayment } from "../../../variables/admin/courses";
import Header from "../../../components/user/Header";
import HeaderImage from "../../../components/user/images/header_bg_4.jpg";
import jwt from "jsonwebtoken";
import axios from "axios";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
const Booking = () => {
  const [centers, setCenters] = useState([]);
  const [selectedCenter, setSelectedCenter] = useState("");
  const [payMent, setPayment] = useState([]);
  const [selectedPay, setSelectedPay] = useState("");
  const [pts, setPTS] = useState([]);
  const [selectedPT, setSelectedPT] = useState("");
  const [startDate, setStartDate] = useState(new Date().getTime());
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [loadingCenters, setLoadingCenters] = useState(false);
  // useEffect hook to load centers on component mount
  //id course

  useEffect(() => {
    const getCenter = async () => {
      setLoadingCenters(true);
      const center = await getAllCenter();
      setCenters(center);
      const payMent = await getPayment();
      setPayment(payMent);
    };
    if (!loadingCenters) {
      getCenter();
    }
  }, [loadingCenters]);

  // useEffect hook to load PTS for selected center
  useEffect(() => {
    if (selectedCenter) {
      const getPts = async () => {
        const pts = await loadPtByID(selectedCenter);
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

  // Handler function for form submit
  function handleSubmit(event) {
    event.preventDefault();
    // TrainneId
    const accessToken = localStorage.getItem("accessToken");
    const traineeId = jwt.decode(accessToken).accountId;
    // courseId
    const path = window.location.pathname;
    const packageId = path.split("/").pop();
    //mainPtId
    const mainPtId = selectedPT;
    //mainSlotId
    const mainSlotId = selectedSlot;
    //paymentId
    const paymentId = selectedPay;
    const date = new Date(startDate).getTime();
    console.log(date);
    const data = {
      traineeId: traineeId,
      packageId: parseInt(packageId),
      mainPTId: parseInt(mainPtId),
      mainSlotId: parseInt(mainSlotId),
      paymentId: parseInt(paymentId),
      startDate: date,
    };
    console.log(data);
    axios
      .post(
        "https://gachateambe.herokuapp.com/api/trainee-packages",
        data,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.statusText);
        console.log(res.data);
        alert("Success");
      })
      .catch((err, res) => {
        alert("fail");
        console.log(err);
        console.log(res);
      });
  }

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

  // Handler function for start date selection
  function handleDateChange(event) {
    const selectedDate = event.target.value;
    const today = new Date().toISOString().substr(0, 10);
    if (selectedDate >= today) {
      setStartDate(selectedDate);
    } else {
      alert("Start date cannot be before today!");
    }
  }

  // Handler function for slot selection
  function handleSlotChange(event) {
    const selectedSlot = event.target.value;
    setSelectedSlot(selectedSlot);
  }
  function handlePaymentChange(event) {
    const selectedPay = event.target.value;
    setSelectedPay(selectedPay);
  }
  return (
    <>
      <Header title="Buy a Course" image={HeaderImage}>
        Transform your fitness journey with our diverse range of training
        programs, tailored to your individual needs and goals. Whether you're
        looking to build strength, improve endurance, or enhance your overall
        wellness, our expert trainers are here to guide and motivate you every
        step of the way.
      </Header>
      <section>
        <Form className="container" onSubmit={handleSubmit}>
          <Row>
            <Col md={12}>
              <FormGroup>
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
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="pt">PT:</Label>
                <Input
                  type="select"
                  id="pt"
                  value={selectedPT}
                  onChange={handlePTChange}
                  disabled={!selectedCenter}
                  required
                >
                  <option value="">Select a PT</option>
                  {pts.map((pt) => (
                    <option key={pt.id} value={pt.id}>
                      {pt.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="slot">Slot:</Label>
                <Input
                  type="select"
                  id="slot"
                  value={selectedSlot}
                  onChange={handleSlotChange}
                  disabled={!selectedPT}
                  required
                >
                  <option value="">Select a slot</option>
                  {slots.map((slot) => (
                    <option key={slot.slotId} value={slot.slotId}>
                      {slot.slotTime}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="date">Start date:</Label>
                <Input
                  type="date"
                  id="date"
                  value={startDate}
                  onChange={handleDateChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="payment">Payments</Label>
                <Input
                  type="select"
                  id="payment"
                  value={selectedPay}
                  onChange={handlePaymentChange}
                  required
                >
                  <option value="">Select a Payment</option>
                  {payMent.map((pay) => (
                    <option key={pay.paymentId} value={pay.paymentId}>
                      {pay.paymentName}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Button type="submit" className="btn btn-success">
            Register now
          </Button>
        </Form>
      </section>

    </>
  );
};

export default Booking;
