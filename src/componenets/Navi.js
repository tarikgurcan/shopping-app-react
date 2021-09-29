import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import Cartsummary from './Cartsummary';



  export default class Navi extends Component {


    render() {

        return (
            <div>
               <Navbar color="light" light expand="sm">
        <NavbarBrand href="/">Shopping Site</NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap%22%3EGitHub"></NavLink>
            </NavItem>
           {(this.props.cartitem.length>0)?<Cartsummary cartitem={this.props.cartitem} removeItem={this.props.removeItem}/>:null} 
          </Nav>

        </Collapse>
      </Navbar>
    </div>

        )
    }
}
