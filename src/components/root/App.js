import React, { Component } from 'react'
import Navbar from '../navi/Navbar'
import Product from '../products/Product'
import { Container, Row, Col } from 'reactstrap';
import CartList from '../cart/CartList';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <Container>
          <Row>
            <Col><Product /></Col>
            <Col><Product /></Col>
            <Col><Product /></Col>
            <Col><Product /></Col>
          </Row>
        
        </Container>
      </div>
    )
  }
}
export default App;