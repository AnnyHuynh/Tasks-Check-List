import React, { Component } from 'react'; 
import fire from '../config/Fire';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Icon } from 'antd';
import {Link} from "react-router-dom";
import axios from 'axios';
var moment = require('moment');

const styles = {
    backGroundImage: {
      background: 'url(/images/todo-backgr4.jpeg)',
      backgroundSize: 'cover',
      overflow: 'hidden',
      height: "100%",
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
      
      Uncheck: {
        backgroundColor: "#ff9c6e",
        padding: "8px",
        color: "#002766",
        fontsize: "20px",
        width: "160px", 
        marginLeft: "820px",
        top: "50px",
        position: "relative",
        border: "solid pink 3px",
      }
  }

const Task = props => {
    const {task} = props;
return(
      <tr>
        <td id="delete-task" style={{textAlign: "center"}}><button onClick={() => props.removeTask(task)}><Icon type="delete" theme="twoTone" /></button>
        </td>
        <td id="edit" style={{textAlign: "center"}}>
        <Link to={"/edit/"+props.task._id}>
        <button><Icon type="edit" theme="twoTone" /></button>
        </Link>
        </td>
        <td id="done" style={{textAlign:"center"}}><input 
         type="checkbox" name="check-tabl" onChange={() => props.toggleTaskDone(task)}
         checked={task.Done}/></td> 
        <td style={{whiteSpace:"nowrap"}} className={props.task.Done ? 'completed' : ''}>{props.task.DueDate ? moment(props.task.DueDate).format('dddd, MMMM Do') : ''}</td>
        <td className = {props.task.Done ? 'completed' : ''}>{props.task.TaskName}</td>
        <td className = {props.task.Done ? 'completed' : ''}>{props.task.PerformBy}</td>
        <td>{props.task.ODOM}</td>
        <td>{props.task.CCAK}</td>
        <td>{props.task.CCBHI}</td>
        <td>{props.task.SGWS}</td>
        <td>{props.task.NWB}</td>
        <td>{props.task.Quarterly}</td>
        <td>{props.task.Note}</td>
    </tr>
)
}

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.toggleTaskDone = this.toggleTaskDone.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.TaskList = this.TaskList.bind(this);
        this.buttonUncheck = this.buttonUncheck.bind(this);
        
        this.state = {tasks: []};
    }

    logout() {
        fire.auth().signOut();
    }

    componentDidMount() {
        axios.get('/Tasks')
            .then(response => {
                this.setState({ tasks: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('/Tasks')
            .then(response => {
               //this.setState({ tasks: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    removeTask(task) {
        const tasks = [...this.state.tasks].filter(tempTask => (
            !(tempTask._id === task._id)
        ));

        this.setState({
          tasks
        }, () => {
            axios.delete('http://localhost:3002/Tasks/delete/' + task._id, task)
                .then(res => {
                  console.log(res);  
                })
        });
    };

    toggleTaskDone(task) {
         const tempTask = task;

         console.log(tempTask)

         tempTask.Done = true;
        // // call API /save
        // // send tempTask
         const updatedTasks = [...this.state.tasks];
         this.setState({
             task: updatedTasks.map(task => {
                 if (task._id === tempTask._id) {
                     return tempTask;
                 }

                 return task;
             })
         }, () => {
             axios.put('http://localhost:3002/Tasks/save/' + tempTask._id, tempTask)
                 .then(res => {
                   console.log(res);  
                 });
         });

        // const tasks = [...this.state.tasks]; // copy the array
        //  tasks[index] = {
        //      ...tasks[index],
        //      Done: event.target.checked // update done property on copied todo
        //  }; // copy the todo can also use Object.assign
        //  this.setState({
        //      tasks
        //  });
    }

    buttonUncheck(){
        const unCheckTasks = [...this.state.tasks];
        this.setState({
             tasks: unCheckTasks.map(task => {
                 return {
                     ...task,
                     Done: false
                 }
             })
         }, () => {
             axios.put('http://localhost:3002/Tasks/undo')
                 .then(res => {
                   console.log(res);  
                 });
            });
    };


    TaskList() {
        return this.state.tasks.map((task, index) => {
            return (
                <Task 
                    key={index}
                    index={index}
                    task={task} 
                    toggleTaskDone={this.toggleTaskDone}
                    removeTask={this.removeTask}
                />
            );
        });
    }

    render() {
        console.log("state", this.state);
        return (
          <Row style={styles.backGroundImage}>
          <Col></Col>
          <Col xs={11} style={{backgroundColor: "rgba(255, 255, 255, 0.7)", height: "100%", marginTop: "40px", padding: "25px"}}>
            <div>
            <button style={styles.Uncheck} onClick={(unCheck) => this.buttonUncheck(unCheck)}>Uncheck All Tasks</button>
            <button style={styles.buttonOut} onClick={this.logout}>Logout</button>
            <Link to="/create"><button style={styles.buttonAdd}> Add Task </button></Link>
            </div>

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
                            
                              {this.TaskList()}
                            
                        </tbody>
                    
                    </Table>
                    <br/>
                </div>
         
          </Col>  

          <Col></Col>

          </Row>
          );

    }

}

export default TaskList;