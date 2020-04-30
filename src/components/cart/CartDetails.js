import React, { Component } from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Badge ,Row, Container, Col,
  } from 'reactstrap';

import { connect } from "react-redux"

import { bindActionCreators } from 'redux';
import * as addtoCartActions from "../../redux/actions/addtocartActions"


class CartDetails extends Component {
    removeFromCart =(product)=>{
        this.props.actions.removeFromCart(product)
    }

    render() {
        return (
            <div>
                <Container>
                    <h3><Badge color="warning">Stickers</Badge></h3>
                    <Row xs="5">
                        {this.props.cart.map(cartItem => (
                            <Col>
                                <Card>
                                    <CardImg top width="100%" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{cartItem.id}</CardTitle>
                                        <CardSubtitle>{cartItem.unitPrice}</CardSubtitle>
                                        <CardText>{cartItem.unitInStock}</CardText>
                                        <Button onClick={() => this.removeFromCart(cartItem.product)}> Remove</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>

        );
    }
}


function mapStateToProps(state) {
    return {
        cart: state.addtoCartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(addtoCartActions.removefromCart, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);