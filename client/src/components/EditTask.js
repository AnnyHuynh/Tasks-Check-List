import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import axios from 'axios';
var moment = require('moment');


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
    buttonAdd: {
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

class EditTask extends React.Component {

    constructor(props){
      super(props);
      this.onchangeDone = this.onchangeDone.bind(this);
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

    componentDidMount() {
      axios.get('http://localhost:3002/tasks/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                  Done: response.data.Done,
                  DueDate: moment(response.data.DueDate).format('MM/DD/YY'),
                  TaskName: response.data.TaskName,
                  PerformBy: response.data.PerformBy,
                  ODOM: response.data.ODOM,
                  CCAK: response.data.CCAK,
                  CCBHI: response.data.CCBHI,
                  SGWS: response.data.SGWS,
                  NWB: response.data.NWB,
                  Quarterly: response.data.Quarterly,
                  Note: response.data.Note
              })   
          })
          .catch(function (error) {
              console.log(error);
          })
  }

    onchangeDone(e) {
      this.setState({
        Done: !this.state.Done
      })
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

      const obj = {
        Done: this.state.Done,
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

    console.log(obj);
        axios.post('http://localhost:3002/Tasks/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/Tasks');
    
   }

    render() {
        return (
            <Row style={styles.backGroundImage}>
            <Col></Col>
            <Col xs={11} style={{backgroundColor: "rgba(255, 255, 255, 0.7)", height: "100%", marginTop: "40px", padding: "25px"}}>
              <div>
              <button style={styles.buttonOut} onClick={this.logout}>Logout</button>
              <Link to="/create"><button style={styles.buttonAdd}> Add Task </button></Link>
              </div>
  
              <h2 style={{textAlign: "center"}}>Accounting Department Monthly Closing Calendar</h2>
              <h3 style={{textAlign: "center"}}> For the Month Ended: </h3> 
              <hr style={{height: "1px", padding:"1px", background: "gray", width: "860px"}}/>
  
              <div style={{marginTop: "30px"}}/>
              <h3>Edit Task Here!</h3>
              <form onSubmit={this.onSubmit}>
              <div className="form-check">
                <label style={{marginLeft: "-20px"}} className="form-check-label" htmlFor="completedCheckbox">
                              Done
                </label> 
                <br/>
                <input  className="form-check-input"
                        id="completedCheckbox"
                        type="checkbox"
                        name="completedCheckbox"
                        onChange={this.onchangeDone}
                        checked={this.state.Done}
                        value={this.state.Done}
                        />                       
                </div>
                <br/> <br/>

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
                    <input style={styles.buttonSubmit} type="submit" value="Update Task" className="btn btn-primary" />
                </div>
              </form>
         
          </Col>  

          <Col></Col>

          </Row>
        )
    }
}

export default EditTask;





