import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    }




  return (
    <section className='skill' id="skells">
    <Container>
        <Row>
            <Col>
            <div className='skill-bx'>
                <h2>
                    Skills
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                    
                </Carousel>
            </div>
            </Col>
        </Row>
    </Container>

    </section>
  )
}
