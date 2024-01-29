import React from "react";
// import Image3 from "../Images/3.jpg";
import Appointment from "../Images/appointment.png";
import Pick from "../Images/pick.png";
import SafeTransport from "../Images/safe_transport.png";
import Unloading from "../Images/unloading.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Shift.css";

const Shift = () => {
  return (
    <div id="shift" className="container pb-5">
      <Container>
        <Row>
          <p className="py-5 shift-text">Shifting process</p>
        </Row>
        <Row
          noGutters
          xs={1}
          sm={1}
          md={2}
          lg={2}
          xl={2}
          xxl={4}
          className="justify-content-center"
        >
          <Col>
            <Card className="mb-5 shift-card">
              
              <Card.Img
                className="shift-card-img "
                variant="top"
                src={Appointment}
                alt="Appointment"
              />
              <Card.Body>
                <Card.Title className="card-head">Appointment</Card.Title>
                <Card.Text className="card-text">
                  Book an appointment from our Website
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-5 shift-card">
              <Card.Img
                variant="top"
                src={Pick}
                className="shift-card-img"
                alt="Shifting Image"
              />
              <Card.Body>
                <Card.Title className="card-head">Pick and Pack</Card.Title>
                <Card.Text className="card-text">
                  Book an appointment from our Website
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-5 shift-card">
              <Card.Img
                variant="top"
                src={SafeTransport}
                className="shift-card-img"
                alt="Shifting Image"
              />
              <Card.Body>
                <Card.Title className="card-head">Safe Transport</Card.Title>
                <Card.Text className="card-text">
                  Book an appointment from our Website
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-5 shift-card">
              <Card.Img
                variant="top"
                src={Unloading}
                className="shift-card-img"
                alt="Shifting Image"
              />
              <Card.Body>
                <Card.Title className="card-head">Safe Unloading</Card.Title>
                <Card.Text className="card-text">
                  Book an appointment from our Website
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
};

export default Shift;
