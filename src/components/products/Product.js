import React, { Component } from 'react'
import { connect } from "react-redux"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import * as addtoCartActions from "../../redux/actions/addtocartActions"
import alertify from "alertifyjs"
import { bindActionCreators } from 'redux';

class Product extends Component {

  addToCart = (product) => {
    //this.props.actions.addtoCart(product)
    alertify.success("sepete eklendi")
  }

  render() {
    return (
      <div>
      <Card>
          <CardImg top width="100%" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button onClick={() => this.addToCart("productName")}> add</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      currentCart: state.addtoCartReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
      action:{
          addtoCart:bindActionCreators(addtoCartActions.addtoCart,dispatch)
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);