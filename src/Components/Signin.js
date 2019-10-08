import React from  "react";
//import Button from "@material-ui/core/Textfield";
//import Typography from "@material-ui/core/Typography";
import {Link, Redirect} from "react-router-dom"
import {
	//HelpBlock,
	FormGroup,
	FormControl,
	FormLabel
} from "react-bootstrap";

class Singin extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        if(this.state.isAuthenticated === true) {
            return <Redirect to='/' />;
        }
        return (
            <div className = 'Signin'>
                {/* <form onSubmit={this.handleSubmit}> */}
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
            </div>
        );
    }
}

export default Singin;