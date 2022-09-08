import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemCount = ({ stock }) => {
  const [cantidad, setCantidad] = useState(0);

  return cantidad == 0 ? (
    <Container>
      <Row>
        <Button
          className="border bg-success"
          variant="success"
          onClick={() => setCantidad(1)}
        >
          AGREGAR CARRITO
        </Button>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Button
            variant="danger"
            className=" m-auto"
            onClick={() => {
              cantidad == "0"
                ? console.log("CLICK")
                : setCantidad(cantidad - 1);
            }}
          >
            -
          </Button>
        </Col>
        <Col md="auto">
          <span className=" align-content-center">{cantidad}</span>
        </Col>
        <Col>
          <Button
            variant="primary"
            className=""
            onClick={() => {
              cantidad == stock
                ? console.log("CLICK")
                : setCantidad(cantidad + 1);
            }}
          >
            +
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCount;