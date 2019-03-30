import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";


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
      }
  }

class EditTask extends React.Component {
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
  
                  <div>
                      Edit Form Here!
                </div>
         
          </Col>  

          <Col></Col>

          </Row>
        )
    }
}

export default EditTask;





