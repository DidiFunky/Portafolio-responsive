import meter1 from "../img/meter1.png";
import meter2 from "../img/meter2.png";
import meter3 from "../img/meter3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../img/color-sharp.png";
import javascript from "../img/js.png"
import html from "../img/html.png"
import css from "../img/css-3.png"
import react from "../img/physics.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
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
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
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
                <div className="item">
                  <img src={meter1} alt="Image3" />
                  <h5>Ciencia de Datos</h5>
                </div>
              </Carousel>
              <h2>Habilidades tecnicas</h2>
              <p>
                Tengo habilidades técnicas sólidas en una variedad de lenguajes
                de programación y herramientas técnicas que me permiten abordar
                una amplia gama de desafíos tecnológicos. Algunas de mis
                habilidades técnicas clave incluyen:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                auto={true} // Habilita la reproducción automática
                autoPlaySpeed={1000} // Especifica el tiempo de espera en milisegundos (en este caso, 2 segundos)
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={javascript} alt="Image0" />
                  <h5>Diseño Web</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image1" />
                  <h5>Desarrollo Web</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image2" />
                  <h5>Diseño de interfaces UI/UX</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image3" />
                  <h5>Ciencia de Datos</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image4" />
    </section>
  );
};
