import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../store/actions/OrderActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
class GetOrderByIdComponent extends Component {
 
    componentDidMount() {
        const { orderActions, match } = this.props;
        orderActions.fetchOrderById(match.params.id);
    }
    render() {
        const { order } = this.props;
        return (
            <div>
                {
                    order !== undefined ? 
                        
                            <Table className="mt-4">
                                <tr>
                                    <th width="20%">Order ID</th>
                                    <th width="20%">orderDate</th>
                            <th width="20%">dispatchDate</th>
                            <th width="20%">Total Cost</th>
                            <th width="20%">status</th>
                            <th width="20%">customerId</th>
                                   
                                </tr>
                                
                          
                                        <tr>
                                        <td>{order.orderId}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.dispatchDate}</td>
                                    <td>{order.totalCost}</td>
                                    <td>{order.status}</td>
                                    <td>{order.customerId}</td>
                                        </tr>
                          
 
                                        </Table>
                  
                        :
                        <h3>Loading....</h3>
                }
            </div>
        );
    }
}
 
function mapStateToProps(state) {
 
    return { order: state.orderReducer.order }
}
 
function mapDispatchToProps(dispatch) {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(GetOrderByIdComponent);