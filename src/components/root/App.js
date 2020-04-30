import React, { Component } from 'react'
import Navbar from '../navi/Navbar'
import Product from '../products/Product'
import { Container, Row, Col } from 'reactstrap';
import CartList from '../cart/CartList';
import CategoryList from "../categories/CategoryList"



class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container fluid={true} >
          <Row>
            <Col xs="2"><CategoryList/></Col>
            <Col xs="10"><Product /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default App;