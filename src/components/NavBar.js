import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import codeblooded from '../assets/img/yc-logo-no-bg.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/GitHub.svg';
import navIcon3 from '../assets/img/resume.svg';
import { MyVerticallyCenteredModal } from "./Resume";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const [modalShow, setModalShow] = useState(false);

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={codeblooded} alt="CodeBlooded" />
            </Navbar.Brand>
            <div className='r-col'>
                <span className='navbar-text'>
                    <div className='social-icon md'>
                        <a href="https://www.linkedin.com/in/ycaipang/" target="_blank"><img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/ycaipang"><img src={navIcon2} target="_blank" alt="" /></a>
                        <a variant="primary" onClick={() => setModalShow(true)}><img src={navIcon3} alt="" /></a>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </span>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggle-icon"></span>
                    <span className="navbar-toggle-icon"></span>
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'actve navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'actve navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'actve navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon lg'>
                        <a href="https://www.linkedin.com/in/ycaipang/" target="_blank"><img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/ycaipang"><img src={navIcon2} target="_blank" alt="" /></a>
                        <a variant="primary" onClick={() => setModalShow(true)}><img src={navIcon3} alt="" /></a>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}