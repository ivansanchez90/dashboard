import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Home = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs="4" className="bg-primary">columna 1</Col>
          <Col xs="4" className="bg-warning">columna 2</Col>
          <Col xs="4" className="bg-danger">columna 3</Col>

        </Row>
      </Container>
    </>
  );
}

export default Home;