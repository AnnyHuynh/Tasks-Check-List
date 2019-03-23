import React, { Component } from 'react'; 
import fire from '../config/Fire';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Icon } from 'antd';

const styles = {
    backGroundImage: {
      background: 'url(/images/todo-backgr4.jpeg)',
      backgroundSize: 'cover',
      overflow: 'hidden',
      height: "100vh",
    },
    buttonOut: {
        backgroundColor: "#ff9c6e",
        padding: "8px",
        color: "#002766",
        fontsize: "20px",
        width: "100px", 
        marginLeft: "1160px",
        border: "solid pink 3px"
      }
  }

class Task extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
          <Row style={styles.backGroundImage}>
          <Col></Col>
          <Col xs={11} style={{backgroundColor: "rgba(255, 255, 255, 0.7)", height: "100%", marginTop: "40px", padding: "25px"}}>

            <button style={styles.buttonOut} onClick={this.logout}>Logout</button>
            <h2 style={{textAlign: "center"}}>Accounting Department Monthly Closing Calendar</h2>
            <h3 style={{textAlign: "center"}}> For the Month Ended: </h3> 
            <hr style={{height: "1px", padding:"1px", background: "gray", width: "860px"}}/>

                <div>
                    <Table className="table table-responsive table-hover" black bordered hover>
                        <thead style={{border: "solid 1px black"}}>
                            <tr>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                            <th scope="col">done</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Task ID</th>
                            <th scope="col">Task Name</th>
                            <th scope="col">Perform By</th>
                            <th scope="col">Odom</th>
                            <th scope="col">CCAK</th>
                            <th scope="col">CBHI</th>
                            <th scope="col">SGWS</th>
                            <th scope="col">NWB</th>
                            <th scope="col">Quarterly</th>
                            <th scope="col">Note</th>
                        </tr>
                        
                        </thead>

                        <tbody>
                        <tr>
                            <td id="delete-task" style={{textAlign: "center"}}><button><Icon type="delete" theme="twoTone" /></button></td>
                            <td id="edit" style={{textAlign: "center"}}><button><Icon type="edit" theme="twoTone" /></button></td>
                            <td id="done" style={{textAlign:"center"}}><input type="checkbox" name="check-tabl"/></td>
                            <td id="due"></td>
                            <td id="task-id"></td>
                            <td id="task"></td>
                            <td id="whom"></td>
                            <td id="odom"></td>
                            <td id="ccak"></td>
                            <td id="cbhi"></td>
                            <td id="sgws"></td>
                            <td id="nwb"></td>
                            <td id="quarterly"></td>
                            <td id="note"></td>
                            
                        </tr> 

                        </tbody>
                    
                    </Table>
                </div>
         
          </Col>  

          <Col></Col>

          </Row>
          );

    }

}

export default Task;