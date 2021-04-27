import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../store/actions/OrderActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

class GetOrderByCust extends Component {

    componentDidMount() {
        const { orderActions, match } = this.props;
        orderActions.fetchOrderByCustomerId(match.params.id);
    }
    render() {
        const { orders } = this.props;
        return (
            <div>
                {
                    orders !== undefined ?
                    <Table className="mt-4">
                        
                                <tr>
                                    <th width="20%">Order ID</th>
                                    <th width="20%">orderDate</th>
                                    <th width="20%">dispatchDate</th>
                                    <th width="20%">Total Cost</th>
                                    <th width="20%">status</th>
                                    

                                </tr>
                           
                                {
                                this.props.orders.map((order, index) =>
                                <tr>
                                    <td>{order.orderId}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.dispatchDate}</td>
                                    <td>{order.totalCost}</td>
                                    <td>{order.status}</td>
                                    
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

function mapDispatchToProps(dispatch) {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetOrderByCust);