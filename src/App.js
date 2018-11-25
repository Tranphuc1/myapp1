import React, { Component } from 'react';
import './App.css';
import { firebaseConnect } from './firebase';
import Login from './Login';
import Home from './Home';
class App extends Component {
	constructor() {
		super();
		this.state = ({
		  user: null,
		});
		this.authListener = this.authListener.bind(this);
	  }
componentDidMount() {
		this.authListener();
	  }
authListener() {
    firebaseConnect.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
    	<div className="LoginForm">
    	{this.state.user ? ( <Home/>) : (<Login/>)}
    	</div>
     );
  }
}
export default App;
