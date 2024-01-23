import React, { useRef } from "react";
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
    <div id="book" className="container">
      <Row>
        <Col className="">
          <Image src={BookImg} className="h-100" rounded fluid />
        </Col>
        <Col>
          <Row style={{ fontSize: "96px" }}>Book Your Slot!</Row>
          <Form ref={form} onSubmit={sendEmail}>
            {" "}
            {/* Use Form component */}
            <Row>
              <Form.Group as={Col} controlId="movingfrom" className="py-3 pt-4">
                {/* <Form.Label>Moving from*</Form.Label> */}
                <Form.Control
                  name="movingfrom"
                  type="text"
                  style={{ height: "70px" }}
                  placeholder="Moving from*"
                  className="text-center"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="movingto" className="py-3 pt-4">
                {/* <Form.Label>Moving to*</Form.Label> */}
                <Form.Control
                  name="movingto"
                  type="text"
                  style={{ height: "70px" }}
                  placeholder="Moving to*"
                  className="text-center"
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
                  style={{ height: "70px" }}
                  placeholder="Name*"
                  className="text-center"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="phone no" className="py-3">
                {/* <Form.Label>Moving to*</Form.Label> */}
                <Form.Control
                  name="phonenumber"
                  type="number"
                  style={{ height: "70px" }}
                  placeholder="Phone No.*"
                  className="text-center"
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
                  className="text-center"
                  style={{ height: "70px" }}
                  
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="email" className="py-3" >
                {/* <Form.Label>Email*</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Email*"
                  className="text-center"
                  style={{ height: "70px" }}
                  name="email"
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="description" className="py-3">
                {/* <Form.Label>Description</Form.Label> */}
                <Form.Control
                  name="description"
                  as="textarea"
                  rows={6}
                  className="text-center"
                  placeholder="Description"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Button
                  variant="primary"
                  type="submit"
                  value="Send"
                  style={{ width: "700px", height: "70px" }}
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
    </div>
  );
};

export default Contact;

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "./Contact.css";
// import BookImg from '../Images/book-img.png'
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Image from 'react-bootstrap/Image';

// import { ToastContainer, toast, Zoom } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const Contact = () => {
//   console.log(process.env.REACT_APP_EMAILJS_API_KEY);
//   const form = useRef();

//   const notify = () => {
//     toast.promise(
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve();
//         }, 3000);
//       }),
//       {
//         pending: "Sending Email...",
//         success: "Email Sent",
//         error: "Email Not Sent",
//       },
//       {}
//     );
//   };

//   const notnotify = () => {
//     toast.promise(
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           reject();
//         }, 3000);
//       }),
//       {
//         pending: "Sending Email...",
//         success: "Email Sent",
//         error: "Email Not Sent",
//       },
//       {}
//     );
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_ojtp96t",
//         "template_iqu0ejz",
//         form.current,
//         "NENEPoSdvmKxjGLTF"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           e.target.reset();
//           console.log("message sent");
//           notify();
//         },
//         (error) => {
//           console.log(error.text);
//           notnotify();
//         }
//       );
//   };

//   return (
//     <div id="book" className="container py-5">

//         <Row>
//           <Col><Image src={BookImg} className="" rounded fluid /></Col>
//           <Col>
//             <form ref={form} onSubmit={sendEmail}>
//               <div className="">
//                 <input
//                   type="text"
//                   placeholder="Moving from*"
//                   className="grid-item "
//                   name="movingfrom"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Moving to*"
//                   className="grid-item "
//                   name="movingto"
//                   required
//                 />
//               </div>

//               <div>
//                 <input
//                   type="text"
//                   placeholder="Full Name*"
//                   className="grid-item "
//                   name="fullname"
//                   required
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email*"
//                   className="grid-item "
//                   name="email"
//                   required
//                 />
//               </div>

//               <div>
//                 <input
//                   type="date"
//                   placeholder="Moving-Date*"
//                   className="grid-item "
//                   name="date"
//                   required
//                 />
//                 <input
//                   type="number"
//                   placeholder="Phone Number*"
//                   className="grid-item "
//                   name="phonenumber"
//                   required
//                 />
//               </div>

//               <div>
//                 <input
//                   type="text"
//                   placeholder="Description"
//                   className="grid-item des "
//                   id="description"
//                   name="description"
//                   required
//                 />
//               </div>

//               <div>
//                 <input type="submit" className="grid-item es" value="Send" />
//                 <ToastContainer
//                   transition={Zoom}
//                   theme="light"
//                   position={"top-right"}
//                   autoClose={3000}
//                   closeOnClick={true}
//                   pauseOnHover={false}
//                   pauseOnFocusLoss={false}
//                   draggable={true}
//                   hideProgressBar={false}
//                   newestOnTop={false}
//                   rtl={false}
//                 />
//               </div>
//             </form>
//           </Col>
//         </Row>

//       {/* <div className="book-curved">
//         <div className="book-img">
//           <p> Book your Slot </p>
//         </div>
//         <div className="books-labels">
//           <form ref={form} onSubmit={sendEmail}>
//             <div className="">
//               <input
//                 type="text"
//                 placeholder="Moving from*"
//                 className="grid-item "
//                 name="movingfrom"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Moving to*"
//                 className="grid-item "
//                 name="movingto"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="text"
//                 placeholder="Full Name*"
//                 className="grid-item "
//                 name="fullname"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email*"
//                 className="grid-item "
//                 name="email"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="date"
//                 placeholder="Moving-Date*"
//                 className="grid-item "
//                 name="date"
//                 required
//               />
//               <input
//                 type="number"
//                 placeholder="Phone Number*"
//                 className="grid-item "
//                 name="phonenumber"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 type="text"
//                 placeholder="Description"
//                 className="grid-item des "
//                 id="description"
//                 name="description"
//                 required
//               />
//             </div>

//             <div>
//               <input type="submit" className="grid-item es" value="Send" />
// <ToastContainer
//   transition={Zoom}
//   theme="light"
//   position={"top-right"}
//   autoClose={3000}
//   closeOnClick={true}
//   pauseOnHover={false}
//   pauseOnFocusLoss={false}
//   draggable={true}
//   hideProgressBar={false}
//   newestOnTop={false}
//   rtl={false}
// />
//             </div>
//           </form>
//         </div>
//       </div> */}
//     </div>
//   );
// };
