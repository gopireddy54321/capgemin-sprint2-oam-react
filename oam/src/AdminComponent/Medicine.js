import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MedicineActions from '../store/actions/MedicineActions';
import AppNavbar from './AppNavbar';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';





class Medicine extends Component {
    

    
    constructor() {
        super();
        
    }

    
    componentDidMount(){
        this.props.MedicineActions.fetchAllMedicines();
    }
    handleDelete(){
        alert("admin Deleted")
    }
    
    
 
    render() {
       
           
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/admin/medicine/new">Add Medicine</Button>
          </div>
                <h3>Medicine Details</h3>
                {
                    this.props.medicines !== undefined ?
                    
                    
                    <Table className="mt-4">
                        
                            
                                <tr>
                                    <th width="20%">Medicine ID</th>
                                    <th width="20%">Medicine Name</th>
                                    
                                    <th width="15%">Actions</th>
                                    
                                </tr>
                           
                                {
                                    this.props.medicines.map((medicine, index) =>
                                        <tr>
                                            <td>{medicine.medicineId}</td>
                                            <td>{medicine.medicineName}</td>
                                            <td>
                                                <ButtonGroup>
                                            <Button size="sm" color="primary" tag={Link} to={"/admin/medicine/view/" + medicine.medicineId}>View</Button>
                                            <Button size="sm" color="secondary" tag={Link} to={"/admin/medicine/update/" + medicine.medicineId}>Edit</Button>
                                            <Button size="sm" variant="contained" color="danger"  onClick={() => {this.props.MedicineActions.deleteMedicine(medicine.medicineId);alert("Medicine deleted successfully with id "+medicine.medicineId);}}>Delete</Button>
                                            </ButtonGroup>
                                            </td>
                                        
                                        </tr>)
                                }
                            
 
                       
                            </Table>
                            
                        :
                        <h3>Loading....</h3>
                        
                }
                </Container>
            </div>           
        );
    }
}
function mapStateToProps(state) {
 
    return { medicines: state.medicineReducer.medicines }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      MedicineActions : bindActionCreators(MedicineActions,dispatch),
      
   }
  
  };
 
export default connect(mapStateToProps,mapDispatchToProps) (Medicine);