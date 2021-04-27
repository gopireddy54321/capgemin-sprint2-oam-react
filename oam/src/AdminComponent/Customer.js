import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../store/actions/CustomerActions';
import AppNavbar from './AppNavbar';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';




class Customer extends Component {

    
    constructor() {
        super();
        
    }

    
    componentDidMount(){
        this.props.customerActions.fetchAllCustomers();
    }
    handleDelete(){
        alert("admin Deleted")
    }
    
    
 
    render() {    
        return (
            <div>
                <AppNavbar/>
                <h3>Customer Details</h3>
                {
                    this.props.customers !== undefined ?
                    
                    
                    <Table className="mt-4">
                            
                            
                                <tr>
                                    <th width="20%">Customer ID</th>
                                    <th width="20%">Customer Name</th>
                                    
                                    <th width="10%">Actions</th>
                                    
                                </tr>
                           
                                {
                                    this.props.customers.map((customer, index) =>
                                        <tr>
                                            <td>{customer.customerId}</td>
                                            <td>{customer.customerName}</td>
                                            <td>
                                                <ButtonGroup>
                                            <Button size="sm" color="primary" tag={Link} to={"/admin/customer/" + customer.customerId}>View</Button>
                                            <Button size="sm" variant="contained" color="danger"  onClick={() => {this.props.customerActions.deleteCustomer(customer.customerId);alert("Customer deleted successfully with id "+customer.customerId);}}>Delete</Button>
                                            </ButtonGroup>
                                            </td>
                                        
                                        </tr>)
                                }
                            
 
                       
                            </Table>
                        :
                        <h3>Loading....</h3>
                }
            </div>           
        );
    }
}
function mapStateToProps(state) {
 
    return { customers: state.customerReducer.customers }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      customerActions : bindActionCreators(customerActions,dispatch),
      
   }   
  };
 
export default connect(mapStateToProps,mapDispatchToProps) (Customer);