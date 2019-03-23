import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
       <nav className="navbar navbar-expand-lg" style={{height: "80px", backgroundColor: " #ff9c6e", fontWeight: "bolder"}}>
           <img
            src="/images/logo.jpg"
            width="80"
            height="80"
            style={{marginLeft: "-16px", marginRight: "10px"}}
            alt="Odom'slogo"
           />
           <Link style={{fontSize: "35px", fontFamily: "Times New Roman, Times, serif", color: "#002766"}} className="navbar-brand" to="/">
             Accounting's Month-End Tasks!
           </Link>
           <button
             className="navbar-toggler"
             type="button"
             data-toggle="collapse"
             data-target="#navbarNav"
           >
             <span className="navbar-toggler-icon" />
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                 <Link style={{fontFamily: "Times New Roman, Times, serif", color: "#002766"}} className="nav-link" to="/login">
                   Login/SignUp
                 </Link>
               </li>
              
             </ul>
           </div>
        
       </nav>


    );
  }
}

export default Navbar;