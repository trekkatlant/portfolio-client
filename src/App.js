import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Signin from './Components/Signin';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			//input: "",
		//	isAuthed: false,
			//auth: ""
		};
	}
	render() {
		const SignupPage = () => (<Signup/>);
		const SigninPage = () => (<Signin/>);
		return (
			<div className="App">
				<Router>
					{/* <Route exact path='/signup' render = {SignupPage}></Route> */}
					<Route exact path='/' 		render = {SigninPage}></Route>
				</Router>
			</div>
		);
	}
}


export default App;
