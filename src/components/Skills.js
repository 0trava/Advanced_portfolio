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
                <h2>
                    Skills
                </h2>
                <p>I like web development Web and deep learning.<br></br> Every day I try to raise my level of knowledge.</p>
                <Carousel 
                responsive={responsive} 
                infinite={true} 
                nextIcon = {">"}
                prevLabel ={""}
                prevIcon = {"<"}
                nextLabel = {""}
                className="owl-carousel owl-theme skill-slider"
                >
                    <Carousel.Item>
                    <div className='items'>
                        <img src={meter1} alt="Images1"/>
                        <h5>HTML + CSS</h5>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='items'>
                        <img src={meter2} alt="Images2"/>
                        <h5>Java Script</h5>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='items'>
                        <img src={meter3} alt="Images3"/>
                        <h5>React</h5>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='items'>
                        <img src={meter3} alt="Images4"/>
                        <h5>React native</h5>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='items'>
                        <img src={meter2} alt="Images5"/>
                        <h5>Node js</h5>
                    </div>
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
