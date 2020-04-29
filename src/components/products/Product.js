import React, { Component } from 'react'
import { connect } from "react-redux"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge, Table, ListGroupItem, ListGroup,
} from 'reactstrap';

import * as addtoCartActions from "../../redux/actions/addtocartActions"
import * as productActions from "../../redux/actions/productActions"


import alertify from "alertifyjs"
import { bindActionCreators } from 'redux';

class Product extends Component {

  addToCart = (product) => {
    this.props.actions.addtoCart(product)
    alertify.success("sepete eklendi")
  }

  componentDidMount() {
    this.props.actions.getProducts();
  }

  render() {
    return (
      <div>
      <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
      
          {this.props.products.map(product =>(
         
            <tr>
              <th>#</th>
              <th> {Product.id}</th>
              <th>{product.unitPrice}</th>
              <th>{product.unitInStock}</th>
           </tr>
          ))}
      
        
       
      </tbody>
    </Table>
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