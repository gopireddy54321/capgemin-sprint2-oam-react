import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../store/actions/CustomerActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
class GetCustomerByIdComponent extends Component {
 
    componentDidMount() {
        const { customerActions, match } = this.props;
        customerActions.fetchCustomerById(match.params.id);
    }
    render() {
        const { customer } = this.props;
        return (
            <div>
              {
                    customer !== undefined ?
                        <div>
 
 <Table className="mt-4">
                            
                            
                            <tr>
                                <th width="20%">Customer ID</th>
                                <th width="20%">Customer Name</th>
                                <th width="20%">MobileNumber</th>
                                <th width="20%">Emailid</th>
                                 
                                
                            </tr>
                       
                           
                                    <tr>
                                        <td>{customer.customerId}</td>
                                        <td>{customer.customerName}</td>
                                        <td>{customer.mobileNumber}</td>
                                        <td>{customer.emailId}</td>
                                        
                                        </tr>
 
                        </Table>
                        </div>
                        : <h3>Loading....</h3>
                }
            </div>

            
        );
    }
}
 
function mapStateToProps(state) {
 
    return { customer: state.customerReducer.customer }
}
 
function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(GetCustomerByIdComponent);