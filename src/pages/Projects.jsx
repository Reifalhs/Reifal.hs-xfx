import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


import GridExample from '../components/GridExample';
import ScrollAnimation from '../animated/ScrollAnimation';

const Projects = () => {

const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { type: 'tween', duration: 0.5 }}
};
  return (
    <div id='projects' className='projects bg-light about w-100 min-vh-100 pb-3'>
        <Container className='pt-5'>
          <Row className='titAbout'>
            <Col>
              <ScrollAnimation animationVariants={fadeInUp}>
                <h1 className=' text-center fw-bold'>Projects</h1>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row className='ms-3'>
            <GridExample/>
          </Row>
        </Container>
    </div>
  )
}

export default Projects