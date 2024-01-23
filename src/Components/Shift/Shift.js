import React from "react";
import Card from "react-bootstrap/Card";
import Image3 from "../Images/3.jpg";
import Appointment from "../Images/appointment.png";
import Pick from "../Images/pick.png";
import SafeTransport from "../Images/safe_transport.png";
import Unloading from "../Images/unloading.png";



const Shift = () => {
  return (
    <div id="shift" className="container pb-5">
      <h1 className="py-5">Shifting process</h1>
      <div className="d-flex justify-content-between">
        <div>
          <Card className="" style={{ width: "305.06px", height: "450px", borderRadius:'0 64px 0 20px' }}>
            <Card.Img
              variant="top"
              src={Appointment}
              style={{ width: "305.06px", height: "303.16px",borderRadius:'0 64px 0 20px' }}
              alt="Shifting Image"
            />
            <Card.Body>
              <Card.Title>Appointment</Card.Title>
              <Card.Text>Book an appointment from our Website</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "305.06px", height: "450px", borderRadius:'20px 20px 20px 20px' }}>
            <Card.Img
              variant="top"
              src={Pick}
              style={{ width: "305.06px", height: "303.16px", borderRadius:'20px 20px 20px 20px' }}
              alt="Shifting Image"
            />
            <Card.Body>
              <Card.Title>Pick and Pack</Card.Title>
              <Card.Text>Book an appointment from our Website</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "305.06px", height: "450px", borderRadius:'20px 20px 20px 20px' }}>
            <Card.Img
              variant="top"
              src={SafeTransport}
              style={{ width: "305.06px", height: "303.16px", borderRadius:'20px 20px 20px 20px' }}
              alt="Shifting Image"
            />
            <Card.Body>
              <Card.Title>Safe Transport</Card.Title>
              <Card.Text>Book an appointment from our Website</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "305.06px", height: "450px", borderRadius:'20px 0 20px 0' }}>
            <Card.Img
              variant="top"
              src={Unloading}
              style={{ width: "305.06px", height: "303.16px" ,borderRadius:'20px 0 20px 0'}}
              alt="Shifting Image"
            />
            <Card.Body>
              <Card.Title>Safe Unloading</Card.Title>
              <Card.Text>Book an appointment from our Website</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Shift;

