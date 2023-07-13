import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {ArrowRightCircle} from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            ticker();
        }, delta )

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        
    }

  return (
    <section className='banner' id="home">
        <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h1>{`Hi I'm webdecoded - 0trava`} </h1>
                <p>It doesn't matter how many days in your life.It is important how much life is in your days</p>
                <button onClick={() => {}}>Let's connect 
                <ArrowRightCircle size={25}/>
                </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={HeaderImg} alt="Header Img"/>
            </Col>

        </Row>
        </Container>
    </section>
  )
}