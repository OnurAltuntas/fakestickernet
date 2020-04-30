import React, { Component } from 'react'
import { connect } from "react-redux"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge, Table, ListGroupItem, ListGroup, Row, Container, Col,
} from 'reactstrap';

import * as addtoCartActions from "../../redux/actions/addtocartActions"
import * as productActions from "../../redux/actions/productActions"
import alertify from "alertifyjs"
import { bindActionCreators } from 'redux';

class Product extends Component {

  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addtoCart({quantity:1,product})
    alertify.success("sepete eklendi")
  }


  render() {
    return (
      <div>
    
        <Container>
        <h3><Badge color="warning">Stickers</Badge></h3>
          <Row xs="5">
              {this.props.products.map(product => (
                <Col>
                <Card>
                  <CardImg top width="100%" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{product.id}</CardTitle>
                    <CardSubtitle>{product.unitPrice}</CardSubtitle>
                    <CardText>{product.unitInStock}</CardText>
                    <Button onClick={() => this.addToCart(product)}> add</Button>
                  </CardBody>
                </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    Cart: state.addtoCartReducer,
    products: state.productListReducer,
    currentCategory: state.changeCategoryReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {

      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addtoCart: bindActionCreators(addtoCartActions.addtoCart, dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);