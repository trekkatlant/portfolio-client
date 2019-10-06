import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';

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
	  return (
		<div className="App">
				path="/Signup"
				render={props => (
					<Signup
					/>
				)}		
		</div>
	  );
	}
}


export default App;
