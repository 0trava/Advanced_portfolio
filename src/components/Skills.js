import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import Carousel from 'react-bootstrap/Carousel';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };




  return (
    <section className='skill' id="skills">
    <Container>
        <Row>
            <Col>
            <div className='skill-bx'>
                <h2>Skills</h2>
                <p>I like web development Web and deep learning.<br></br> Every day I try to raise my level of knowledge.</p>
                <Carousel fade
                  responsive={responsive} 
                  infinite={true}
                  controls={false}
                  // nextIcon = {">"}
                  // prevLabel ={""}
                  // prevIcon = {"<"}
                  // nextLabel = {""}
                  className="owl-carousel owl-theme skill-slider"
                  >
                  <Carousel.Item  interval={500}>
                  <img
                    className="d-block w-100"
                    src={`${meter1}?text=First slide&bg=373940`}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>HTML + CSS</h3>

                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`${meter2}?text=Second slide&bg=373940`}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Java Script</h3>

                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`${meter2}?text=Third slide&bg=373940`}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>React</h3>

                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={meter3}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>React native</h3>

                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={meter2}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Node js</h3>

                  </Carousel.Caption>
                </Carousel.Item>

                </Carousel>
            </div>
            </Col>
        </Row>
    </Container>
    <img src={colorSharp} className='background-image-left' alt="background_image"/>

    </section>
  )
}
