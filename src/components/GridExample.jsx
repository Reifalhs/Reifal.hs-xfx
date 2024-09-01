import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import P1 from '../assets/p1.jpeg'
import P2 from '../assets/p2b.png'
import P3 from '../assets/p3.png'
import P4 from '../assets/p4.png'

import ScrollAnimation from '../animated/ScrollAnimation';


function GridExample() {

  const fadeInLeft = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.5 } },
};

const fadeInRight = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.5 } },
};

  return (
    <Row xs={1} md={2} className="g-4">
        <Col>
          <ScrollAnimation animationVariants={fadeInRight} delay={0.5}>
            <Card className='card p-3 bg-light'>
              <Card.Img variant="top" src={P1} />
              <Card.Body>
                <Card.Title>Lycoris Recoil</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>
        <Col >
          <ScrollAnimation animationVariants={fadeInLeft} delay={0.5}>
            <Card className='card p-3 bg-light'>
              <Card.Img variant="top" src={P2} />
              <Card.Body>
                <Card.Title>Rice Cream</Card.Title>
                <Card.Text>
                Ladies | Beauty Store Website | Product Page designed by Tran Mau Tri Tam ✪. the global community for designers and creative professionals.
                </Card.Text>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>
        <Col>
          <ScrollAnimation animationVariants={fadeInRight} delay={0.5}>
            <Card className='card p-3 bg-light'>
              <Card.Img variant="top" src={P3} />
              <Card.Body>
                <Card.Title>Fruit Juice WebPage Desain</Card.Title>
                <Card.Text>
                  Fruit Juice Webpage Design. #design #landing_page #ux #ui #website_design #website #figma
                </Card.Text>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>
        <Col >
          <ScrollAnimation animationVariants={fadeInLeft} delay={0.5}>
            <Card className='card p-3 bg-light'>
              <Card.Img variant="top" src={P4} />
              <Card.Body>
                <Card.Title>Starbuck WebPage Desain</Card.Title>
                <Card.Text>
                Rice Cream  Webpage Design. #design #landing_page #ux #ui #website_design #website #figma.
                </Card.Text>
              </Card.Body>
            </Card>
          </ScrollAnimation>
        </Col>
    </Row>
  );
}

export default GridExample;