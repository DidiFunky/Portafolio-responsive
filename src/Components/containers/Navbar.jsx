import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import linkedinIcon from "../img/linkedin.png";
import githubIcon from "../img/github.png";
import mailIcon from "../img/mail.png";

function NavbarRes() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState (false)

  useEffect(() => {
    const onScroll = () =>{
      if (window.scrollY > 50){
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  
  return (
    <Navbar
      expand="lg"
      className={scrolled ? "scrolled": ""}
    >
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <a href="#home">Johan.Dev</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
            <Nav.Link href="#skill" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skill')} >Habilidades</Nav.Link>
            <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#home">
                <img src={linkedinIcon} alt="linkedin-Icon" />
              </a>
              <a href="#home">
                <img src={githubIcon} alt="github-Icon" />
              </a>
              <a href="#home">
                <img src={mailIcon} alt="mail-Icon" />
              </a>
            </div>
            <button className="btn-contact" onClick={() => console.log('connect')}> <span> Habla Conmigo</span> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarRes;
