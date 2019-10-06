import React from  "react";
//import Button from "@material-ui/core/Textfield";
import Typography from "@material-ui/core/Typography";
import {Link, Redirect} from "react-router-dom"
import {
	HelpBlock,
	FormGroup,
	FormControl,
	FormLabel
} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from 'react-bootstrap';

class Signup extends React.Component {
	constructor(props) {
		super();
		this.state = {
				firstname: "",
				lastname: "",
				email: "",
				password: "",
				isAuthenticated: false
		}
	}
	componentDidMount() {
		const auth = sessionStorage.getItem("");
		if(auth){
			this.setState({
				isAuthenticated: true
			});
			return;
		}
	}
	
	handleChange = event => {
		this.setState({[event.target.id]: event.target.value});
	}
	/*
	handleSubmit = async event => {
		event.preventDefault();
		fetch(
			//stock api url here 
			{
			method: "put",
			headers : Content-Type" : "application/json"
			}
		)
			.then(respone => response.json())
			.then(data => {
				if(data.success) {
					this.props.loadUser(data);
					this.setState({isAuthenticated: true});
				}
			});
	}*/
	
	render() {
		if(this.state.isAuthenticated === true) {
			return <Redirect to='/' />;
		}
		return (
			<div className = 'Signup'>
				//<form onSubmit={this.handleSubmit}>
					<FormGroup controlId ="firstname" bsSize="large">
						<FormLabel>Firstname</FormLabel>
						<FormControl
							autoFocus
							type="firstname"
							value={this.state.firstname}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId ="lastname" bsSize="large">
						<FormLabel>Lastname</FormLabel>
						<FormControl
							autoFocus
							type="lastname"
							value={this.state.lastname}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId ="email" bsSize="large">
						<FormLabel>Email</FormLabel>
						<FormControl
							autoFocus
							type="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId ="password" bsSize="large">
						<FormLabel>Password</FormLabel>
						<FormControl
							autoFocus
							type="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</FormGroup>
				</form>
				<h3>Already signed up? <Link to='/'>Click here to sign in!</Link></h3>
			</div>
		);
	}
}

export default Signup;
		
	