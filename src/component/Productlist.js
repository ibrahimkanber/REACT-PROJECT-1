import React, { Component } from "react";
import { Col, Row ,Table,Button} from "reactstrap";

export default class Productlist extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col xs="10">
            <h3>
              {this.props.info.title}-{this.props.currentCategory}
            </h3>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name1</th>
                  <th>Quantity Per Unit</th>
                  <th>Unit Price</th>
                  <th>Units In Stock</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {this.props.products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td> <Button color="info" onClick={()=>this.props.add(product)} >Add</Button></td>
        
            </tr>
          ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}
