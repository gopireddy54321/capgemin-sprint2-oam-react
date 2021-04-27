import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as userActions from '../store/actions/UserActions';

 import { Button, ButtonGroup, Container, Table } from 'reactstrap';
 
import { Redirect } from 'react-router-dom';

class RegisterComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            customerId:'',
            password:'',
            role:'customer' 
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createUser = this.createUser.bind(this);
    }
 
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    createUser(e) {
        e.preventDefault();
        
        let payload = {
            
            customerId: this.state.customerId,
            password:this.state.password,
            role:this.state.role
        }
        
        const { userActions } = this.props;
        userActions.createUser(payload);        
 
    }
    


    render() {
        const { isAuthUser, user } = this.props;

    if(user !== undefined) {
         return <Redirect to="/register/addcustomer" />;
    } 
        return (
            <div class = "loginbg-img">
                <center class ="loginbox">
                                                                                                                                                                                                                                <br></br> <br></br> <br></br> <br></br> <br></br>
                <h3>Add User</h3>
                <form onSubmit={this.createUser} method="post"> 
                        
                           <p>
                                    <label>UserName:</label>
                                    <input class="input" type="number" placeholder="USERname" name="customerId" id="custorId" value={this.state.customerId} onChange={this.handleInputChange}></input>
                                
                                    </p>
                                    <p>
                                
                                    <label> Password:</label>
                                    <input class="input" type="text" placeholder="Password" name="password" id="password" value={this.state.password} onChange={this.handleInputChange}></input>
                                    </p>
                                
                         
                                    <ButtonGroup>
                        {/* <input type="submit" value="submit"></input> */}
                        <Button variant="contained" color="success" type="submit" value="submit" >Login</Button>
                        <Button variant="contained" color="primary"  tag={Link} to="/">cancle</Button>
                        </ButtonGroup>
                        </form> 
                        </center>                                           
                   
                    
{
    this.props.user !== undefined &&
    alert("user Created Succssfully with id"+ this.props.user.customerId)
   
}
    </div> );
                      
                    
    } 
}
 
function mapStateToProps(state) {
 
    return { user: state.userReducer.newUser }
}
 
function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);