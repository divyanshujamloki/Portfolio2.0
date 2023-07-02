import React from "react";
import PageHeaderContent from "../../Components/PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import bulb from "../Asset/bulbi.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../Asset/color-sharp.png";
import "./Style.scss";

export default function Skills() {
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
    <div>
      <section id="skills" className="skills">
        <PageHeaderContent
          headerText="Skills"
          icon={<BsInfoCircleFill size={40} />}
        />
      </section>

      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <div id="car">
                  <Carousel
                    autoPlay={true}
                    responsive={responsive}
                    infinite={true}
                    className="owl-carousel owl-theme skill-slider"
                  >
                    <div className="item">
                      <img src={bulb} alt="Image" />
                      <h2>React js </h2>
                    </div>

                    <div className="item">
                      <img src={bulb} alt="Image" />
                      <h2>JavaScript </h2>
                    </div>

                    <div className="item">
                      <img src={bulb} alt="Image" />
                      <h2>Node.js </h2>
                    </div>

                    <div className="item">
                      <img src={bulb} alt="Image" />
                      <h2>Oracle Apex </h2>
                    </div>

                    <div className="item">
                      <img src={bulb} alt="Image" />
                      <h2>Postman</h2>
                    </div>

                    <div className="item">
                      <img src={bulb} alt="Image" />
                      <h2>Pyhton </h2>
                    </div>

                    <div className="item">
                      <img src={bulb} alt="Image" />
                      <h2>Java </h2>
                    </div>

                    <div className="item">
                      <img src={bulb} alt="Image" />
                      <h2>SQL </h2>
                    </div>

                    <div className="item">
                      <img src={bulb} alt="Image" />
                      <h2>PL/SQL</h2>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    </div>
  );
}
