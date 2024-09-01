import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { RiMailSendLine } from "react-icons/ri";

import ScrollAnimation from '../animated/ScrollAnimation';


const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { type: 'tween', duration: 0.5 }}
};
  const fadeInButton = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.5 }}
};
  return (
    <div id='contact' className='contact bg-light w-100 min-vh-100 pt-5'>
      <Container>
        <Row>
          <Col>
            <ScrollAnimation animationVariants={fadeInUp}>
              <h3 className='text-center fw-bold mt-5'>Contact Me!</h3>
            </ScrollAnimation>
            <ScrollAnimation animationVariants={fadeInUp} delay={0.3}>
              <p className='text-center'>Interested in connecting? Need web solutions for your business?
              Let's get to know each other! Feel free to reach out and start a conversation. </p>
            </ScrollAnimation>
            <form action="https://formspree.io/f/xpwabvdp" method='POST' className='row justify-content-center mx-auto'>
              <ScrollAnimation animationVariants={fadeInUp} delay={0.5}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name='Name' placeholder="Your Name" />
                </Form.Group>
              </ScrollAnimation>
              <ScrollAnimation animationVariants={fadeInUp} delay={0.5}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name='Email' placeholder="your@email.com" />
                </Form.Group>
              </ScrollAnimation>
              <ScrollAnimation animationVariants={fadeInUp} delay={0.5}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name='Message' rows={3} />
                </Form.Group>
              </ScrollAnimation>
              <ScrollAnimation animationVariants={fadeInButton} delay={1}>
                <div className="buttonBox">
                  <button type='submit' className='btn btn-dark'>Send <RiMailSendLine className='iCon'/></button>
                </div>
              </ScrollAnimation>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact