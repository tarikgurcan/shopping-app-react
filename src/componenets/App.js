import React, { Component, Fragment } from "react";
import { Row, Col, Container } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import Products from "./Products";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import Notfound from "./Notfound";
import Cartlist from "./Cartlist";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: "",
      products: [],
      cart: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }
  getProducts(categoryid) {
    let url = "http://localhost:3000/products";
    if (categoryid) {
      url += "?categoryId=" + categoryid;
    }
    fetch(url)
      .then((resolve) => resolve.json())
      .then((data) => this.setState({ products: data }));
  }
  componentDidMount() {
    this.getProducts();
  }
  addtoCart = (product) => {
    let newcart = this.state.cart;
    let newitem = this.state.cart.find((c) => c.Newproduct.id === product.id);
    if (newitem) {
      newitem.quantity += 1;
    } else {
      newcart.push({ Newproduct: product, quantity: 1 });
    }
    this.setState({ cart: newcart });
    alertify.success(product.productName + " Başarıyla eklendi");
    console.log(this.state.cart);
  };
  removeItem = (e, itemid) => {
    console.log(itemid);
    let newCart = this.state.cart.filter((c) => c.Newproduct.id !== itemid.id);
    this.setState({ cart: newCart });
    alertify.error(itemid.productName + " Başarıyla silindi");
    e.preventDefault();
  };
  selectCategory(category) {
    this.getProducts(category.id);
    this.setState({ currentCategory: category.categoryName });
  }
  render() {
    let ProductTitle = "Products";
    let Navititle = "Navibar";
    return (
      <Fragment>
        <Container>
          <Navi
            Navititle={Navititle}
            cartitem={this.state.cart}
            removeItem={this.removeItem}
          />
          <Row>
            <Col xs="3">
              <CategoryList
                currenctCategory={this.state.currentCategory}
                selectCategory={this.selectCategory}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Products
                      {...props}
                      ProductTitle={ProductTitle}
                      currentCategory={this.state.currentCategory}
                      products={this.state.products}
                      addtoCart={this.addtoCart}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <Cartlist
                      {...props}
                      cart={this.state.cart}
                      removeItem={this.removeItem}
                    />
                  )}
                />
                <Route component={Notfound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
