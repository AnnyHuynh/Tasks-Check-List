import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import axios from 'axios';


const styles = {
    backGroundImage: {
      background: 'url(/images/todo-backgr4.jpeg)',
      backgroundSize: 'cover',
      overflow: 'hidden',
      height: "200vh",
    },
    buttonOut: {
        backgroundColor: "#ff9c6e",
        padding: "8px",
        color: "#002766",
        fontsize: "20px",
        width: "100px", 
        marginLeft: "1160px",
        border: "solid pink 3px",
      },
    buttonBack: {
        backgroundColor: "#ff9c6e",
        padding: "8px",
        color: "#002766",
        fontsize: "20px",
        width: "100px", 
        marginLeft: "1020px",
        position: "relative",
        bottom: "44px",
        border: "solid pink 3px",
      },
      buttonSubmit: {
        backgroundColor: "#ff9c6e",
        padding: "8px",
        color: "#002766",
        fontsize: "25px",
        width: "150px", 
        border: "solid pink 3px",
      }
  }

class CreateTask extends Component {
        constructor(props) {
          super(props);

          this.onChangeDueDate = this.onChangeDueDate.bind(this);
          this.onChangeTaskName = this.onChangeTaskName.bind(this);
          this.onChangePerformBy = this.onChangePerformBy.bind(this);
          this.onChangeOdom = this.onChangeOdom.bind(this);
          this.onChangeCCAK = this.onChangeCCAK.bind(this);
          this.onChangeCCBHI = this.onChangeCCBHI.bind(this);
          this.onChangeSGWS = this.onChangeSGWS.bind(this);
          this.onChangeNWB = this.onChangeNWB.bind(this);
          this.onChangeQuarterly = this.onChangeQuarterly.bind(this);
          this.onChangeNote = this.onChangeNote.bind(this);
          this.onSubmit = this.onSubmit.bind(this);

          this.state = {
              Done: false,
              DueDate: ' ',
              TaskName: ' ',
              PerformBy: ' ',
              ODOM: ' ',
              CCAK: ' ',
              CCBHI: ' ',
              SGWS: ' ',
              NWB: ' ',
              Quarterly: ' ',
              Note: ' '
          }
        }

        onChangeDueDate(e) {
          this.setState({
              DueDate: e.target.value
          });
        }

        onChangeTaskName(e) {
          this.setState({
              TaskName: e.target.value
          });
        }

        onChangePerformBy(e) {
          this.setState({
              PerformBy: e.target.value
          });
        }

        onChangeOdom(e) {
          this.setState({
              Odom: e.target.value
          });
        }

        onChangeCCAK(e) {
          this.setState({
              CCAK: e.target.value
          });
        }

        onChangeCCBHI(e) {
          this.setState({
              CCBHI: e.target.value
          });
        }

        onChangeSGWS(e) {
          this.setState({
              SGWS: e.target.value
          });
        }

        onChangeNWB(e) {
          this.setState({
              NWB: e.target.value
          });
        }

        onChangeQuarterly(e) {
          this.setState({
              Quarterly: e.target.value
          });
        }

        onChangeNote(e) {
          this.setState({
              Note: e.target.value
          });
        }

        onSubmit(e) {
                e.preventDefault();
                
                console.log(`Form submitted:`);
                console.log(`Due Date: ${this.state.DueDate}`);
                console.log(`Task Name: ${this.state.TaskName}`);
                console.log(`Perform By: ${this.state.PerformBy}`);
                console.log(`Odom: ${this.state.Odom}`);
                console.log(`CCAK: ${this.state.CCAK}`);
                console.log(`CCBHI: ${this.state.CCBHI}`);
                console.log(`SGWS: ${this.state.SGWS}`);
                console.log(`NWB: ${this.state.NWB}`);
                console.log(`Quarterly: ${this.state.Quarterly}`);
                console.log(`Note: ${this.state.Note}`);

                const newTask = {
                  DueDate: this.state.DueDate,
                  TaskName: this.state.TaskName,
                  PerformBy: this.state.PerformBy,
                  ODOM: this.state.Odom,
                  CCAK: this.state.CCAK,
                  CCBHI: this.state.CCBHI,
                  SGWS: this.state.SGWS,
                  NWB: this.state.NWB,
                  Quarterly: this.state.Quarterly,
                  Note: this.state.Note
              };
      
              axios.post('http://localhost:3002/Tasks/add', newTask)
                  .then(res => this.props.history.push('/Tasks'));
                
                this.setState({
                  Done: false,
                  DueDate: ' ',
                  TaskName: ' ',
                  PerformBy: ' ',
                  Odom: ' ',
                  CCAK: ' ',
                  CCBHI: ' ',
                  SGWS: ' ',
                  NWB: ' ',
                  Quarterly: ' ',
                  Note: ' '
                })
               
            }


    render() {
        return (
            <Row style={styles.backGroundImage}>
            <Col></Col>
            <Col xs={11} style={{backgroundColor: "rgba(255, 255, 255, 0.7)", height: "100%", marginTop: "40px", padding: "25px"}}>
              <div>
              <button style={styles.buttonOut} onClick={this.logout}>Logout</button>
              <Link to="/Tasks"><button style={styles.buttonBack}> Back </button></Link>
              </div>
  
              <h2 style={{textAlign: "center"}}>Accounting Department Monthly Closing Calendar</h2>
              <h3 style={{textAlign: "center"}}> For the Month Ended: </h3> 
              <hr style={{height: "1px", padding:"1px", background: "gray", width: "860px"}}/>
              
            <div style={{marginTop: "30px"}}/>
            <h3>Create New Task Row</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Due Date: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.DueDate}
                            onChange={this.onChangeDueDate}
                            style={{width:"650px"}}
                            />
                </div>
                <div className="form-group">
                    <label>Task Name: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.TaskName}
                            onChange={this.onChangeTaskName}
                            style={{width:"650px"}}
                            />
                </div>
                <div className="form-group">
                    <label>Perform By: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.PerformBy}
                            onChange={this.onChangePerformBy}
                            style={{width:"650px"}}
                            />
                </div>
                <label style={{fontSize:"20px"}}>Companies:</label>
                <div className="form-group">
                    <label>Odom: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.Odom}
                            onChange={this.onChangeOdom}
                            style={{width:"650px"}}
                            />
                </div>
              
                <div className="form-group">
                    <label>CCAK: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.CCAK}
                            onChange={this.onChangeCCAK}
                            style={{width:"650px"}}
                            />
                </div>
              
                <div className="form-group">
                    <label>CCBHI: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.CCBHI}
                            onChange={this.onChangeCCBHI}
                            style={{width:"650px"}}
                            />
                </div>
              
                <div className="form-group">
                    <label>SGWS: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.SGWS}
                            onChange={this.onChangeSGWS}
                            style={{width:"650px"}}
                            />
                </div>
              
                <div className="form-group">
                    <label>NWB: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.NWB}
                            onChange={this.onChangeNWB}
                            style={{width:"650px"}}
                            />
                </div>

                <div className="form-group">
                    <label>Quarterly: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.Quarterly}
                            onChange={this.onChangeQuarterly}
                            style={{width:"650px"}}
                            />
                </div>
                <div className="form-group">
                    <label>Note: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.Note}
                            onChange={this.onChangeNote}
                            style={{width:"650px"}}
                            />
                </div>
              

                <div className="form-group">
                    <input style={styles.buttonSubmit} type="submit" value="Create Task" className="btn btn-primary" />
                </div>
            </form>
        
        </Col>
        
        <Col></Col>

        </Row>

        )
    }
}

export default CreateTask;





