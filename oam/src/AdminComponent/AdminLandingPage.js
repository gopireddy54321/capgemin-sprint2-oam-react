import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import Grid from 'react-data-grid';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Design from './Design';
import LogoutComponent from '../components/LogoutComponent'


class AdminLandingPage extends Component {
  
  render() {

    let currentUser = JSON.parse(localStorage.getItem('currentUser')); 
    return (
      <div class="bg-imgadmin">
        <AppNavbar/>
        <LogoutComponent/>
        <p>{currentUser.name} {currentUser.role}</p>
        
        <Design/>
        
            {/* <Container fluid>
          <Button color="link"><Link to="/customer">Customer</Link></Button>
          <Button color="link"><Link to="/medicine">Medicine</Link></Button>
          <Button color="link"><Link to="/orders">Orders</Link></Button>

        </Container> */}
      </div>
    );
  }
}

export default AdminLandingPage;