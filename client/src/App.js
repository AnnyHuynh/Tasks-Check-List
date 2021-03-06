import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import fire from './config/Fire';
import TaskList from './components/Task';
import EditTask from './components/EditTask';
import CreateTask from './components/CreateTask';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ user });
       // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
       // localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
    <BrowserRouter className="App">
     <Navbar />
     <Switch>
     <Route path="/" component={Home} exact/> 
     <Route path="/edit/:id" component={EditTask} />
     <Route path="/create" component={CreateTask} />

     <div>
     {this.state.user ?  
           ( <TaskList/>) : (<Route path="/login" component={Login} exact/>)}
     </div>

     <Route component={Error}/>
     
     </Switch>  
      
     </BrowserRouter>

     )
}
}
   export default App;

 

