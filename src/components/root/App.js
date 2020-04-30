import React, { Component } from 'react'
import Navbar from '../navi/Navbar'
import {Route,Switch} from "react-router-dom"
import  Dashboard from "./Dashboard"
import CartDetails from '../cart/CartDetails'
import Product from '../products/Product'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/product" exact component={Product}/>
          <Route path="/cart" exact component={CartDetails}/>
        </Switch>
        
      </div>
    )
  }
}
export default App;