import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as medicineActions from '../store/actions/MedicineActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

class CreateMedicineComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medicineId: '',
            medicineName: '',
            medicineCost: '',
            mfd: '',
            expiryDate: '',
            quantity: '',
            categoryId: '',
            companyName: ''

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createMedicine = this.createMedicine.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createMedicine(e) {
        e.preventDefault();

        let payload = {
            medicineId: this.state.medicineId,
            medicineName: this.state.medicineName,
            medicineCost: this.state.medicineCost,
            mfd: this.state.mfd,
            expiryDate: this.state.expiryDate,
            quantity: this.state.quantity,
            categoryId: this.state.categoryId,
            companyName: this.state.companyName

        }

        const { medicineActions } = this.props;
        medicineActions.createMedicine(payload);

    }

    clear = () => {
        this.setSate = ({
            medicineId: '',
            medicineName: '',
            medicineCost: '',
            mfd: '',
            expiryDate: '',
            quantity:'',
            categoryId:'',
            companyName:''

        });
    }

    render() {
        return (
            < div class = "loginbg-img" >
            <center>
                                                                                                                                                                                     <br></br><br></br>
                < h3 > Add Medicine </ h3 >
                <form onSubmit={this.createMedicine}>​​​
                   <p>
                               
                                < input  class="input" type="text" placeholder="Medicine Id" name="medicineId" id="medicineId"
                                    value={this.state.medicineId} onChange={this.handleInputChange} ></input>
                           
                           </p><p>
                            
                                
                                < input class="input" type="text" placeholder="Medicine Name" name="medicineName"
                                    id="medicineName" value={this.state.medicineName}
                                   onChange={this.handleInputChange}></ input >
                            </p><p>
                    
                               
                               < input class="input" type="text" placeholder="Medicine Cost" name="medicineCost"
                                    id="medicineCost" value={this.state.medicineCost}
                                    onChange={this.handleInputChange}></ input >
                           </p> <p>
                             
                                < input class="input" type="text" placeholder="Manufactured Date" name="mfd"
                                    id="mfd" value={this.state.mfd}
                                    onChange={this.handleInputChange}></input>
                          </p> <p>

                          
                                
                                < input class="input" type="text" placeholder="Expiry Date" name="expiryDate" id="expiryDate"
                                    value={this.state.expiryDate} onChange={this.handleInputChange}></ input >
                           </p> <p>
                             
                               < input class="input" type="text" placeholder="Quantity" name="quantity"
                                    id="quantity" value={this.state.quantity}
                                    onChange={this.handleInputChange}></input>
                            </p><p>
                            
                            < input class="input" type="text" placeholder="Category" name="categoryId"
                                    id="categoryId" value={this.state.categoryId}
                                    onChange={this.handleInputChange}></input>
                           </p><p>
                           
                              < input class="input" type="text" placeholder="Company Name" name="companyName"
                                    id="companyName" value={this.state.companyName}
                                    onChange={this.handleInputChange}></input>
                            
                            </p>
                            <p>
        
                            <ButtonGroup>
                    {/* < input type="submit" value="submit" ></ input > */}
                    <Button size="sm" color="success" type="submit" value="submit">submit</Button>
                    < Button color="danger" tag={Link} to="/admin/medicine" > Cancle </ Button >
                    </ButtonGroup>
                    </p>
                    
                </ form >
                {
                    this.props.medicine !== undefined &&
                    alert("Medicine Created Successfully with id" + this.props.medicine.medicineId)
                }
                </center>
            </ div >);
    }
}

function mapStateToProps(state) {

    return { medicine: state.medicineReducer.newMedicine }
}

function mapDispatchToProps(dispatch) {
    return {
        medicineActions: bindActionCreators(medicineActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMedicineComponent);