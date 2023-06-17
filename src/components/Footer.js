import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/code-blooded-no-bg.png"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/GitHub.svg';
import navIcon3 from '../assets/img/resume.svg';
import { MyVerticallyCenteredModal } from "./Resume";
import { useState } from 'react';

export const Footer = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href=""><img src={navIcon1} /></a>
              <a href=""><img src={navIcon2} /></a>
              <a variant="primary" onClick={() => setModalShow(true)}><img src={navIcon3} alt="" /></a>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <p>CopyRight 2023. All Righs Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}