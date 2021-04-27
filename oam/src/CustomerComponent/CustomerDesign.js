import React, {Component} from "react";
import {Button ,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class CustomerDesign extends Component {
    render() {
        return (
            <div>
              
<div id = "middlebox">
             <Card style={{ width: '18rem' }}>
  <Card.Img  src="http://localhost:3000/amme.jpg" />
  <Card.Body>
    <Card.Title>Medicines</Card.Title>
    <Card.Text>
     Customer can view/Buy medicine.
    </Card.Text>
    <Card.Link class="btn btn-primary" href="/medicine/shop">Medicines</Card.Link>
  </Card.Body>
</Card>
</div>
<h1></h1>
<div id = "rightbox">
             <Card style={{ width: '18rem' }}>
  <Card.Img  src="http://localhost:3000/amos.png" />
  <Card.Body>
    <Card.Title>Orders</Card.Title>
    <Card.Text>
      Customer can view  his/her orders.
    </Card.Text>
    <Card.Link class="btn btn-primary" href={`'/customer/order/:id'`}>Orders</Card.Link>
  </Card.Body>
</Card>

</div>
            </div>
        )
        }
    }