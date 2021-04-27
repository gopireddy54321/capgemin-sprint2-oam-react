import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as customerActions from '../store/actions/CustomerActions';

import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Redirect } from 'react-router-dom';
class CreateCustomerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            address: '',
            mobile: '',
            email: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createCustomer(e) {
        e.preventDefault();

        let payload = {

            customerName: this.state.Name,
            address: this.state.address,
            mobileNumber: this.state.mobile,
            emailId: this.state.email
        }
        if (this.validate()) {
            const { customerActions } = this.props;
            customerActions.createCustomer(payload);
        }

    }
    validate() {
        let customerName = this.state.Name;
        let address = this.state.address;
        let mobileNumber = this.state.mobile;
        let emailId = this.state.email;
        let errors = {};
        let isValid = true;

        if (!customerName) {
            isValid = false;
            errors["customerName"] = "Please enter your Name.";
        }
        if(typeof customerName !== "undefined"){
            if(!customerName.match(/^[a-zA-Z]+$/)){
               isValid = false;
               errors["customerName"] = "Only letters";
            }        
         }
        if (!address) {
            isValid = false;
            errors["address"] = "Please enter your Address.";
        }
        if (!emailId) {
            isValid = false;
            errors["emailId"] = "Please enter your Email.";
        }
        if(typeof emailId!=="undefined"){
            var pattern=new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if(!pattern.test(emailId)){
            isValid=false;
            errors["emailId"]="please enter valid email address";
        }
        }
        if (!mobileNumber) {
            isValid = false;
            errors["mobileNumber"] = "Please enter your ContactNumber.";
        }
        if (typeof mobileNumber !== "undefined") {
          
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(mobileNumber)) {
              isValid = false;
              errors["mobileNumber"] = "Please enter only number.";
            }else if(mobileNumber.length != 10){
              isValid = false;
              errors["mobileNumber"] = "Please enter valid phone number.";
            }
          }
        this.setState({
            errors: errors
        });
        return isValid;
    }
    

    render() {
        const { isAuthUser, user } = this.props;

        if (user !== undefined) {
            return <Redirect to="/login" />;
        }
        return (
            <div   class = "loginbg-img">
                <center>
                                                                                                                                                                                                              <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                <h3>Add Customer</h3>
                <form onSubmit={this.createCustomer}>
                   <p>
                                
                                <input class="input" type="text" placeholder="Cuatomer Name" name="Name" id="Name" value={this.state.Name} onChange={this.handleInputChange}></input>
                            
                            <div className="text-danger">{this.state.errors.customerName}</div>
                            
                            </p>  <p>
                                <input class="input" type="address" placeholder="Customer Address" name="address" id="address" value={this.state.address} onChange={this.handleInputChange}></input>
                          
                            <div className="text-danger">{this.state.errors.address}</div>
                            </p> <p>
                                
                                <input class="input" type="Phone" placeholder="mobile Number" name="mobile" id="mobile" value={this.state.mobile} onChange={this.handleInputChange}></input>
                           
                            <div className="text-danger">{this.state.errors.mobileNumber}</div>
                            </p><p>
                               <input class="input" type="email" placeholder="EmailId" name="email" id="email" value={this.state.email} onChange={this.handleInputChange}></input>
                            
                            <div className="text-danger">{this.state.errors.emailId}</div>
                            </p><p>
                            <ButtonGroup>
                    {/* <input type="submit" value="submit"></input> */}
                    <Button variant="contained" color="success" type="submit" value="submit" >Submit</Button>
                    <Button variant="contained" color="primary"  tag={Link} to="/">Cancle</Button>
                    </ButtonGroup>
                    </p>
                </form>
                {
                    this.props.customer !== undefined &&
                    alert("Customer Created Succssfully with id" + this.props.customer.customerName)
                }
                </center>
            </div>);


    }
}

function mapStateToProps(state) {

    return { customer: state.customerReducer.newCustomer }
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomerComponent);