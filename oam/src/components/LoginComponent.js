import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../store/actions/AuthActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
 
class LoginComponent extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.doLogin = this.doLogin.bind(this);
       
    }
 
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    doLogin(e) {
 
        e.preventDefault();
        const payload = {
            username : this.state.username,
            password : this.state.password
        }
     
        if(this.validate()) {
            this.props.authActions.doLogin(payload);        
        }
      
    }
 
    validate(){
        let username = this.state.username;
        let password = this.state.password;
        let errors = {};
        let isValid = true;
    
        if (!username) {
          isValid = false;
          errors["username"] = "Please enter your name.";
        }
    
        if (!password) {
          isValid = false;
          errors["password"] = "Please enter your password.";
        }   
      
        this.setState({
          errors: errors
        });
    
        return isValid;
    }

render() {
 
    const { isAuthUser, user } = this.props;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser);

    if(user !== undefined) {
        if (user.role === "admin" && isAuthUser) return <Redirect to="/admin" />;
        else if (user.role === "customer" && isAuthUser) return <Redirect to={`/customer/${user.customerId}`}/>;
        else return <Redirect to = '/'/>;
    }  
    // if(isAuthUser === false ) {
    //     console.log("Login Failed");
    // }      
    
    return(
        <div class="example1">
        <div  class="container">
            
   
    
            
            {
                (this.props.isAuthUser === false ) && <div>Login Failed</div>
                
            }
             <center> <h1> Online Ayurvedic Medicine </h1> </center>
             <br></br>
             <br></br>
             <br></br>
             
            

             
             <center> <p>
        {/* <TextField id="standard-basic" label="Username" name="username" value={this.state.username} onChange={this.handleInputChange}/> */}
        <input class="input" type="text" placeholder="User Id" name="username" id="customerId" value={this.state.username} onChange={this.handleInputChange}></input>
        <div className="text-danger">{this.state.errors.username}</div>
        </p>
        <p>
            {/* <TextField id="standard-basic" label="password" name="password" value={this.state.password} onChange={this.handleInputChange}/> */}
            <input class="input" type="text" placeholder="password" name="password" id="password" value={this.state.password} onChange={this.handleInputChange}></input>
            <div className="text-danger">{this.state.errors.password}</div>
         </p>
        <p>
            <div class="button">
            {/* <button variant="contained" onClick={this.doLogin}>Login</button> */}
            <Button variant="contained" color="sucess" onClick={this.doLogin}>Login</Button>
            </div>
        </p>
        </center>
      </div>
      </div>
    )
        }
    }
function mapStateToProps(state) {

return { 
    user: state.authReducer.user,
    isAuthUser : state.authReducer.isAuthUser
 }
}

function mapDispatchToProps(dispatch) {
return {
    authActions: bindActionCreators(authActions, dispatch)
}
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);