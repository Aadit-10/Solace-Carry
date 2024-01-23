import React from "react";
import Image3 from "../Images/3.jpg";
import Appointment from "../Images/appointment.png";
import Pick from "../Images/pick.png";
import SafeTransport from "../Images/safe_transport.png";
import Unloading from "../Images/unloading.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Shift = () => {
  return (
    <div id="shift" className="container pb-5">
      <Container>
        <Row >
          <h1
            className="py-5 "
            style={{ fontSize: "90px", fontWeight: "bold" }}
          >
            Shifting process
          </h1>
        </Row>
        <Row noGutters xs={1} sm={1} md={2} lg={2} xl={2} xxl={4}>
          <Col>
            <Card
              className=""
              style={{
                width: "305.06px",
                height: "464px",
                borderRadius: "0 66px 0 66px",
                backgroundColor: "black",
                color: "white",
                fontFamily: "SF Pro",
              }}
            >
              <Card.Img
                variant="top"
                src={Appointment}
                style={{
                  width: "305.06px",
                  height: "303.16px",
                  borderRadius: "0 0 0 20px",
                }}
                alt="Shifting Image"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "40px", fontWeight: "bold" }}>
                  Appointment
                </Card.Title>
                <Card.Text style={{ fontSize: "20px" }}>
                  Book an appointment from our Website
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "305.06px",
                height: "464px",
                borderRadius: "22px 22px 22px 22px",
                backgroundColor: "black",
                color: "white",
                fontFamily: "SF Pro",
              }}
            >
              <Card.Img
                variant="top"
                src={Pick}
                style={{
                  width: "305.06px",
                  height: "303.16px",
                  borderRadius: "20px 20px 0 0 ",
                }}
                alt="Shifting Image"
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "40px", fontWeight: "bold" }}>
                  Pick and Pack
                </Card.Title>
                <Card.Text style={{ fontSize: "20px" }}>
                  Book an appointment from our Website
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card
            style={{
              width: "305.06px",
              height: "464px",
              borderRadius: "22px 22px 22px 22px",
              backgroundColor: "black",
              color: "white",
              fontFamily: "SF Pro",
            }}
          >
            <Card.Img
              variant="top"
              src={SafeTransport}
              style={{
                width: "305.06px",
                height: "303.16px",
                borderRadius: "20px 20px 0 0 ",
              }}
              alt="Shifting Image"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "40px", fontWeight: "bold" }}>
                Safe Transport
              </Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                Book an appointment from our Website
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card
            style={{
              width: "305.06px",
              height: "464px",
              borderRadius: "70px 0 66px 0",
              backgroundColor: "black",
              color: "white",
              fontFamily: "SF Pro",
            }}
          >
            <Card.Img
              variant="top"
              src={Unloading}
              style={{
                width: "305.06px",
                height: "303.16px",
                borderRadius: "60px 0 0 0",
              }}
              alt="Shifting Image"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "39px", fontWeight: "bold" }}>
                Safe Unloading
              </Card.Title>
              <Card.Text style={{ fontSize: "20px" }}>
                Book an appointment from our Website
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>

      <div >
        <div></div>
        <div></div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Shift;
