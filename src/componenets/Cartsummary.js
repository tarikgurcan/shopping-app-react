import React, { Component } from "react";
import {Link} from "react-router-dom"
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
export default class Cartsummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
          <i class="fas fa-shopping-cart"></i> Cart-{this.props.cartitem.length}
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cartitem.map((item,id) => {
              return (
                <DropdownItem key={id}>
                  {item.Newproduct.productName}{" "}
                  <span>
                      <a href="#" className="float-right ml-2" onClick={(e)=>this.props.removeItem(e,item.Newproduct)}>x</a>
                  </span>
                  <span className="badge badge-pill badge-dark float-right mt-1">
                    {item.quantity}
                  </span> 
                </DropdownItem>
              );
            })}

            <DropdownItem>
              <Link to="/cart" className="text-dark">Go to Cart</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}
