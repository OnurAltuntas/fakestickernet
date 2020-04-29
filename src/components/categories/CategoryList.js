import React, { Component } from 'react'
import changeCategoryReducer from "../../redux/reducers/changeCategoryReducer"
import categoryListReducer from "../../redux/reducers/categoryListReducer"

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import *as categoryActions from "../../redux/actions/categoryActions"
import { ListGroup, ListGroupItem,Badge } from 'reactstrap'

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }
    render() {
        return (
            <div> 
                <h3><Badge color="warning">Categories</Badge></h3>
                <ListGroup>
                        {
                            this.props.categories.map(category=>(
                                <ListGroupItem key={category.id}>
                                    {category.categoryName}
                                </ListGroupItem>
                            ))
                        }
                </ListGroup>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)