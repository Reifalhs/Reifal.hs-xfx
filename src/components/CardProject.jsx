import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const CardProject = ({tittle, text, img}) => {
  return (
    <Col className='card border-secondary p-2 text-light mt-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="light">Go somewhere</Button>
      </Card.Body>
    </Col>
  )
}

export default CardProject