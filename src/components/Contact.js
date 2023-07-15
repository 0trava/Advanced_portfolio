import React, { useState } from 'react';
import { Container } from 'react-bootstrap';


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }


  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});


  return (
    <section className='contact' id="connect">
        <Container>
            <Row className="">

            </Row>
        </Container>

    </section>
  )
  }
