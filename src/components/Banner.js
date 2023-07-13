import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import {ArrowRightCircle} from "react-bootstrap-icons";


export const Banner = () => {
  return (
    <section className='banner' id="home">
        <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h1>{`Hi I'm webdecoded - 0trava`} </h1>
                <p>It doesn't matter how many days in your life.It is important how much life is in your days</p>
                <button onClick={() => {}}>Let's connect</button>
            </Col>
            <Col>
            </Col>

        </Row>
        </Container>
    </section>
  )
}