
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as customerActions from '../store/actions/CustomerActions';

class UpdateCustomer extends React.Component {
    constructor(props) {
        super(props);
        
            this.Id= React.createRef();
            this.Name= React.createRef();
            this.mobile= React.createRef();
            this.email= React.createRef(); 
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }
    
 
    // handleInputChange(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }
    componentDidMount() {
        const { customerActions, match } = this.props;
        customerActions.fetchCustomerById(match.params.id);
    }

    updateCustomer(e) {
        e.preventDefault();
        
        let payload = {
            customerId:this.Id.current.value,
            customerName: this.Name.current.value,
            mobileNumber: this.mobile.current.value,
            emailId: this.email.current.value
        }
        
        const { customerActions } = this.props;
        customerActions.updateCustomer(payload);        
 
    }


    render() {
    
        let currentUser = JSON.parse(localStorage.getItem('currentUser')); 
        const { customer,isUpdated } = this.props;

        if(isUpdated !== undefined && isUpdated) {
            // return <Redirect to='/customer'/>
            alert("updated successfully");
        }

        return (
            <div class = "loginbg-img">
                
                <center>
                                                                                                                                            <br></br><br></br><br></br><br></br>
                    <h3>Update Customer</h3>
                    <br></br>
                {
                customer !== undefined ?
                <form onSubmit={this.updateCustomer}>
                    
                    <p>
                        
                                    <label>Customer Id:</label>
                                    <input class="input" defaultValue={customer.customerId} type="text" ref={this.Id} />
                                    </p>  <p>
                             
                             <label>Customer Name:</label>
                                   <input class="input" defaultValue={customer.customerName} type="text" ref={this.Name} />
                                
                                   </p>   <p>
                                
                                    <label>mobile Number:</label>
                                    <input class="input" defaultValue={customer.mobileNumber} type="text" ref={this.mobile} />
                                    </p>  <p>
                                    <label>Email:</label>
                                    <input class="input" defaultValue={customer.emailId} type="text" ref={this.email} />
                                    </p> <p>
                                    <ButtonGroup>
                                            <Button size="sm" color="success" type="submit" value="submit" >Submit</Button>
                        {/* <input type="submit" value="submit"></input> */}
                    <Button variant="contained" color="primary" tag={Link} to={`/customer/${currentUser.name}`}>Cancle</Button>   
                    </ButtonGroup>
                        </p>
                    </form>
                    :<h2>Loading....</h2>
        }
</center>
    </div> 
    );
    } 
}
 
function mapStateToProps(state) {
 
    return { customer: state.customerReducer.customer,
        isUpdated : state.customerReducer.isUpdated 
    }
}
 
function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(UpdateCustomer);