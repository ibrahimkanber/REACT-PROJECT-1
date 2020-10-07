import React, { Component } from "react";
import Categorylist from "./component/Categorylist";
import Navi from "./component/Navi";
import Productlist from "./component/Productlist";
import { Col, Container, Row } from "reactstrap";
import alertify from "alertifyjs"





export default class App extends Component {
  state = { currentCategory: "", products: [],cart:[] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  sayHi = () => {
    console.log("hello");
  };

  addToCart = (product) => {
    // console.log(product)
    let newCart=this.state.cart;
    var addedItem=newCart.find(c=>c.product.id===product.id);
    // console.log(addedItem);
    if(addedItem){
      addedItem.quantity+=1;
    }else{
      // console.log(product)
      newCart.push({product:product ,quantity:1})
      // console.log(newCart)
    }
    // console.log(newCart)
    this.setState({cart:newCart})
    // console.log(this.state.cart)
    alertify.success(product.productName+ " added to cart",1)
  };

  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?categoryId=" + id;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  removeFromCart=(product)=>{
    let newCart=this.state.cart.filter(c=>c.product.id!==product.id);
    this.setState({cart:newCart})
  }



  render() {
    let categoryInfo = { title: "categories" };
    let productInfo = { title: "products" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart}    cartInfo={this.state.cart}/>
          <Row>
            <Col xs="3">
              <Categorylist
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Productlist
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
                
                add={this.addToCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
