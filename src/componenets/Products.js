import React, { Component } from "react";

export class Products extends Component {
  constructor(props) {
    super(props);

  }
 
  render() {
    return (
      <div>
        <h3>{this.props.ProductTitle}-{this.props.currentCategory}</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity per Unit</th>
              <th scope="col">Units in Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitsInStock}</td>
                  <td><button className="btn btn-info" onClick={()=>this.props.addtoCart(product)}>add</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
