import React, { Component } from 'react'

export default class Cartlist extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category ID</th>
              <th scope="col">Name</th>
              <th>Unit Price</th>
              <th>Unit In Stock</th>
              <th>Quantity</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.Newproduct.id}</th>
                  <td>{product.Newproduct.categoryId}</td>
                  <td>{product.Newproduct.productName}</td>
                  <td>{product.Newproduct.unitPrice}</td>
                  <td>{product.Newproduct.unitsInStock}</td>
                  <td>{product.quantity}</td>
                  <td><button className="btn btn-info"onClick={(e)=>this.props.removeItem(e,product.Newproduct)} >delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
            </div>
        )
    }
}
