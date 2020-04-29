import React, { Component } from 'react'
import { connect } from "react-redux"
import {
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';


class CartList extends Component {
    renderEmpty() {
        return (
            <NavItem>
                <NavLink >Cart is empty</NavLink>
            </NavItem>
        );
    }
    renderList() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart
         </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem >
                                {cartItem.product.productName}
                                <Badge color="danger">{cartItem.quantity} </Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>
                        Go to payment step
          </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    render() {
        return (
            <div>
                {
               this.props.cart.length > 0 ? this.renderList() : this.renderEmpty()
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cart:state.addtoCartReducer
    }
}

export default connect(mapStateToProps)(CartList);