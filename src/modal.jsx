import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup} from 'react-bootstrap';
import $ from 'jquery';


class ModalParent extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			signInIsShow: false,
			signUpIsShow: false,
		}

		/* this.handleSignInOpen = this.handleSignInOpen.bind(this);
		this.handleSignInClose = this.handleSignInClose.bind(this); */

		/* this.handleSignUpOpen = this.handleSignUpOpen.bind(this); 
		this.handleSignUpClose = this.handleSignUpClose.bind(this); */
	}

	handleSignInOpen = () => {
		this.setState({ signInIsShow: true });
		console.log("react version: " + React.version);
	}

	handleSignInClose = () => {
		this.setState({ signInIsShow: false });
	}

	handleSignUpOpen = () => {
		this.setState({ signUpIsShow: true });
	}

	handleSignUpClose = () => {
		this.setState({ signUpIsShow: false });
	}


	render (){
		return (
			<div>
				<div>
					<Button bsStyle="primary" onClick={this.handleSignInOpen} >sign in modal</Button>
					<SignInModal title="ავტორიზაცია" show={this.state.signInIsShow} onHide={this.handleSignInClose} />
				</div>
				<div>
					<Button bsStyle="primary" onClick={this.handleSignUpOpen} >sign up modal</Button>
					<SignUpModal title="რეგისტრაცია" show={this.state.signUpIsShow} onHide={this.handleSignUpClose} />
				</div>
			</div>
		);
	}
}

export default ModalParent;


// Helper FieldGroup components:
function FieldGroup ({id, validState, label, help, feedback, ...props}) {
	return (
		<FormGroup controlId={id} validationState={validState}>
			{label && <ControlLabel>{label}</ControlLabel>}
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
			{feedback && <FormControl.Feedback />}
		</FormGroup>
	);
}

function FieldGroupWithAddon ({id, validState, addonSymbol, help, feedback, ...props}) {
	return (
		<FormGroup controlId={id} validationState={validState}>
			<InputGroup>
				<InputGroup.Addon>{addonSymbol}</InputGroup.Addon>
				<FormControl {...props} />
			</InputGroup>
			{help && <HelpBlock>{help}</HelpBlock>}
			{feedback && <FormControl.Feedback />}
		</FormGroup>
	);
}



/* ---------------- Sign in modal ---------------- */

const signIntOb = {
	username: 'bla',
	password: 'blu'
}

class SignInModal extends Component {

	constructor(props) {
		super(props);

		this.state = {
			help: null,
			isInputIncorrect: false
		}
	}

	onSignInClick = () => {
		this.setState({ isInputIncorrect: true });
		$.ajax({
			url: '/bp-SignIn/app/',
			method: 'post',
			headers: {'Authentication': 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJ1c2VyIl0sImlzcyI6Imlzc3VlciIsImlkIjowLCJleHAiOjE0OTk3NzYwNDUsInVzZXJuYW1lIjoiYmxhIn0.__ZbT9z4_6qNr-8o4bNIyfzN_-T86tdwy-p7gRmnGyU'},
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify(signIntOb)
		})
		.then(function(response){
			window.localStorage.setItem("token", response);
			console.log(window.localStorage.getItem("token"));
		})
		.catch(function(error){
			alert("error");
		});
	}

	render () {
		return (
			<Modal show={this.props.show} onHide={this.props.onHide}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FieldGroup id="signInName" type="text" placeholder="username" />
						<FieldGroup id="signInPassword" type="password" placeholder="პაროლი" />
						<IncorrectInputs incorrect={this.state.isInputIncorrect} />
						<FormControl.Static>დაგავიწყდათ პაროლი?</FormControl.Static>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
					<Button onClick={this.onSignInClick}>Sign in</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

class IncorrectInputs extends Component {

	render (){
		return (
			<FormGroup validationState="error" >
									{this.props.incorrect && <FormControl.Static>username ან პაროლი არასწორია</FormControl.Static>}
			</FormGroup>
		);
	}
}


/* ---------------- Sign up modal ---------------- */

const ob = {
	username: "bla",
	password: "blu",
	email: "rame@ge.ge"
}


class SignUpModal extends Component {

	constructor(props){
		super(props);

		this.state = {
			usernameVlidState: 'default',
			usernameHelpText: null,
			usernameFeedback: false,

			emailValidState: 'default',
			emailHelpText: null,
			emailFeedback: false
		}
	}

	onSignUpClick = () => {
		$.ajax({
			url: '/bp-SignIn/app/signup',
			method: 'post',
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify(ob)
		})
		.then(function(response){
			console.log(response);
		})
		.catch(function(error){
			alert("error");
		});
	}

	render (){
		return (
	        <Modal show={this.props.show} onHide={this.props.onHide}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<FieldGroup id="reg-username" validState={this.state.usernameVlidState} 
									help={this.state.usernameHelpText} feedback={this.state.usernameFeedback}
									type="text" placeholder="username" />
						<PasswordComponent />
						<FieldGroupWithAddon id="reg-email" validState={this.state.emailValidState} 
											addonSymbol="@" help={this.state.emailHelpText} feedback={this.state.emailFeedback}
											type="text" />
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
					<Button bsStyle="success" onClick={this.onSignUpClick}>Sign up</Button>
				</Modal.Footer>
	        </Modal>
		);
	}
}


class PasswordComponent extends Component {

	render (){
		return (
			<div>
				<FieldGroup id="password" validState={this.props.validState}
							placeholder="პაროლი" feedback={false} type="password" />

				<FieldGroup id="confirmPassword" validState={this.props.validState}
							placeholder="გაიმეორეთ პაროლი" help={this.props.help} feedback={true} type="password" />
			</div>
		);
	}
}