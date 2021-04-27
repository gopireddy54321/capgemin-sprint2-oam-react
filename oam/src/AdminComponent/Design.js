import React, {Component} from "react";
import {Button ,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Design extends Component {
    render() {
        return (
            <div>
              <div id = "leftbox">
             <Card style={{ width: '18rem' }}>
  <Card.Img   src="http://localhost:3000/amcu.png" />
  <Card.Body>
    <Card.Title>Customers</Card.Title>
    <Card.Text>
      Admin can View  the customer and delet the customer .
    </Card.Text>
    <Card.Link class="btn btn-primary" href="/admin/customer">Customers</Card.Link>
  </Card.Body>
</Card>
</div>
<h1></h1>
<div id = "middlebox">
             <Card style={{ width: '18rem' }}>
  <Card.Img  src="http://localhost:3000/amme.jpg" />
  <Card.Body>
    <Card.Title>Medicines</Card.Title>
    <Card.Text>
     Admin can add, view, delete medicine.
    </Card.Text>
    <Card.Link class="btn btn-primary" href="/admin/medicine">Medicines</Card.Link>
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
      Admin can view orders.
    </Card.Text>
    <Card.Link class="btn btn-primary" href="/admin/orders">Orders</Card.Link>
  </Card.Body>
</Card>

</div>
            </div>
        )
        }
    }