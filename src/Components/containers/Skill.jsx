import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import meter1 from '../img/meter1.png';
import meter2 from '../img/meter2.png';
import meter3 from '../img/meter3.png';
import colorSharp from '../img/color-sharp.png';
import javascript from '../img/js.png';
import html from '../img/html.png';
import css from '../img/css-3.png';
import react from '../img/physics.png';
import adobeAF from '../img/after-effects.png';
import adobePS from '../img/photoshop.png';
import adobeIL from '../img/illustrator.png';
import mySql from '../img/mysql.png';
import adobeXD from '../img/xd.png';
import wordpress from '../img/wordpress.png';
import sketch from '../img/sketch.png';

export const Skills = () => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>
                Soy un apasionado desarrollador front-end con experiencia en la
                creación de experiencias web atractivas y responsivas. Mi
                enfoque está en la usabilidad, el diseño y la optimización para
                ofrecer sitios web de alto rendimiento.
              </p>
              <Slider {...sliderSettings} className='skill-slider'>
                <div className="item">
                  <img src={meter1} alt="Image0" />
                  <h5>Diseño Web</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image1" />
                  <h5>Desarrollo Web</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image2" />
                  <h5>Diseño de interfaces UI/UX</h5>
                </div>
              </Slider>
              <h2>Habilidades técnicas</h2>
              <p>
                Tengo habilidades técnicas sólidas en una variedad de lenguajes
                de programación y herramientas técnicas que me permiten abordar
                una amplia gama de desafíos tecnológicos. Algunas de mis
                habilidades técnicas clave incluyen:
              </p>
              <Slider {...sliderSettings} className='skill-slider'>
                <div className="item">
                  <img src={javascript} alt="Image0" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image1" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image2" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image3" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={adobePS} alt="Image4" />
                  <h5>Adobe Photoshop</h5>
                </div>
                <div className="item">
                  <img src={adobeIL} alt="Image5" />
                  <h5>Adobe Illustrator</h5>
                </div>
                <div className="item">
                  <img src={adobeXD} alt="Image6" />
                  <h5>Adobe XD</h5>
                </div>
                <div className="item">
                  <img src={mySql} alt="Image7" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={sketch} alt="Image8" />
                  <h5>Sketch</h5>
                </div>
                <div className="item">
                  <img src={wordpress} alt="Image9" />
                  <h5>Wordpress</h5>
                </div>
                <div className="item">
                  <img src={adobeAF} alt="Image10" />
                  <h5>Adobe After Effects</h5>
                </div>
                {/* Agrega más elementos aquí */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image11" />
    </section>
  );
};
