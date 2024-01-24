import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import BookImg from "../Images/book-img.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  // console.log(process.env.REACT_APP_EMAILJS_API_KEY);
  const form = useRef();
  const descriptionRef = useRef(null); 
  const notify = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      }),
      {
        pending: "Sending Email...",
        success: "Email Sent",
        error: "Email Not Sent",
      },
      {}
    );
  };

  const notnotify = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject();
        }, 3000);
      }),
      {
        pending: "Sending Email...",
        success: "Email Sent",
        error: "Email Not Sent",
      },
      {}
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ojtp96t",
        "template_iqu0ejz",
        form.current,
        "NENEPoSdvmKxjGLTF"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("message sent");
          notify();
        },
        (error) => {
          console.log(error.text);
          notnotify();
        }
      );
  };

  return (
    // <div className="container">
    <Container>
      <Row id="book">
        <Col xs={12} md={4}>
          <Image src={BookImg} rounded fluid />
        </Col>
        <Col xs={12} md={6}>
          <Row style={{ fontSize: "95px", color: "white" }}>
            Book Your Slot!
          </Row>
          <Form ref={form} onSubmit={sendEmail}>
            {" "}
            {/* Use Form component */}
            <Row>
              <Form.Group as={Col} controlId="movingfrom" className="py-3 pt-4">
                {/* <Form.Label>Moving from*</Form.Label> */}
                <Form.Control
                  name="movingfrom"
                  type="text"
                  placeholder="Moving From*"
                  style={{
                    height: "70px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                  className="text-center place"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="movingto" className="py-3 pt-4">
                {/* <Form.Label>Moving to*</Form.Label> */}
                <Form.Control
                  name="movingto"
                  type="text"
                  placeholder="Moving To*"
                  style={{
                    height: "70px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                  className="text-center place"
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="name" className="py-3">
                {/* <Form.Label>Name*</Form.Label> */}
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Name*"
                  style={{
                    height: "70px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                  className="text-center place"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="phone no" className="py-3">
                {/* <Form.Label>Moving to*</Form.Label> */}
                <Form.Control
                  name="phonenumber"
                  type="number"
                  placeholder="Phone No.*"
                  style={{
                    height: "70px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                  className="text-center place"
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="Date" className=" py-3">
                {/* <Form.Label>Date*</Form.Label> */}
                <Form.Control
                  name="date"
                  type="date"
                  style={{ height: "70px", backgroundColor: "black", color: "white" }}
                  className="text-center place"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="email" className="py-3">
                {/* <Form.Label>Email*</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Email*"
                  style={{ height: "70px", backgroundColor: "black", color: "white" }}
                  className="text-center place"
                  name="email"
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="description" className="py-3 ">
                {/* <Form.Label>Description</Form.Label> */}
                <Form.Control
                  name="description"
                  as="textarea"
                  rows={6}
                  style={{ backgroundColor: "black", color: "white" }}
                  className="text-center place"
                  placeholder="Description"
                  ref={descriptionRef}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Button
                  variant="primary"
                  type="submit"
                  value="Send"
                  style={{
                    width: descriptionRef.current?.offsetWidth || '100%', // Match width to description field
                    height: "70px",
                  }}
                >
                  Send
                </Button>
                <ToastContainer
                  transition={Zoom}
                  theme="light"
                  position={"top-right"}
                  autoClose={3000}
                  closeOnClick={true}
                  pauseOnHover={false}
                  pauseOnFocusLoss={false}
                  draggable={true}
                  hideProgressBar={false}
                  newestOnTop={false}
                  rtl={false}
                />
              </Form.Group>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
    // </div>
  );
};

export default Contact;
