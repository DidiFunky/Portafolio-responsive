import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../img/Img-banner.png";

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenido a mi Portafolio</span>
            <h1>
              {`hi im webdecoded`} <span className="wrap">Web Developer</span>{" "}
            </h1>
            <p>
              Soy un desarrollador front-end apasionado y experimentado con más
              de 1 año de experiencia en el desarrollo de aplicaciones web
              interactivas y atractivas. Me especializo en HTML, CSS y
              JavaScript y tengo una sólida comprensión de los frameworks y
              bibliotecas modernas como React, Angular y Vue.js.
            </p>
            <button onClick={() => console.log('connect')}>Habla Conmigo <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
