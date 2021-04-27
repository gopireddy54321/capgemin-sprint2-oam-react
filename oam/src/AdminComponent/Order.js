import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as OrderActions from '../store/actions/OrderActions';
import AppNavbar from './AppNavbar';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';




class Order extends Component {

    
    constructor() {
        super();
        
    }

    
    componentDidMount(){
        this.props.orderActions.fetchAllOrders();
    }
    handleDelete(){
        alert("admin Deleted")
    }
    
    
 
    render() {    
        return (
            <div>
                <AppNavbar/>
                <h3>Order Details</h3>
                {
                    this.props.orders !== undefined ?
                    
                    
                    <Table className="mt-4">
                            
                            
                                <tr>
                                    <th width="20%">order ID</th>
                                    <th width="20%">Customer ID</th>
                                    
                                    <th width="10%">Actions</th>
                                    
                                </tr>
                           
                                {
                                    this.props.orders.map((order, index) =>
                                        <tr>
                                            <td>{order.orderId}</td>
                                            <td>{order.customerId}</td>
                                            <td>
                                                <ButtonGroup>
                                            <Button size="sm" color="primary" tag={Link} to={"/admin/order/view/" + order.orderId}>View</Button>
                                            <Button size="sm" variant="contained" color="danger"  onClick={() => {this.props.orderActions.deleteorder(order.orderId);alert("order deleted successfully with id "+order.orderId);}}>Delete</Button>
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
 
    return { orders: state.orderReducer.orders }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      orderActions : bindActionCreators(OrderActions,dispatch),
      
   }   
  };
 
export default connect(mapStateToProps,mapDispatchToProps) (Order);