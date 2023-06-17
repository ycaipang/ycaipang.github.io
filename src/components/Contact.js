import { useState  } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-vector.png";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const sucessInitial = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }


  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const form = useRef();
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    emailjs.sendForm('service_3aokim6', 'template_kicur6m', form.current, 'SmqMp8zQP88mapkCe')
    .then((result) => {
      console.log(result.text);
      setStatus({ succes: true, message: 'Message sent successfully'});
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setTimeout(function() {
        setStatus({});
      }, 5000);
    }, (error) => {
      console.log(error.text);
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      setButtonText("Send");
      setTimeout(function() {
        setStatus({});
      }, 5000);
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-itmes-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" name="lastName" value={formDetails.lastName} placeholder="last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" name="phone" value={formDetails.phone} placeholder="phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col sm={6} className="px-1">
                  <textarea row="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} ></textarea>
                  <button type="submit"><span>{buttonText}</span></button> 
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "sucess"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
