import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup} from 'react-bootstrap';


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



/* ---------------- Sign in modal ---------------- */

class SignInModal extends Component {

	constructor(props) {
		super(props);

		this.state = {
			help: null,
			isInputIncorrect: false
		}
	}

	onSignInClick = () => {
		alert("Sign in");
		this.setState({ isInputIncorrect: true });
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

class SignUpModal extends Component {

	constructor(props){
		super(props);

		
	}

	onSignUpClick = () => {
		alert("Sign up");
	}

	render (){
		return (
	        <Modal show={this.props.show} onHide={this.props.onHide}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<UsernameComponent /> {/* help="უკვე არსებობს" validState="error" */}
						<PasswordComponent />
						<EmailComponent />
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


class UsernameComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			nameValue: '',
			surnameValue: ''
		}

		this.onNameChange = this.onNameChange.bind(this);
		this.onSurnameChange = this.onSurnameChange.bind(this);
	}

	onNameChange(event) {
		this.setState({ nameValue: event.target.value });
	}

	onSurnameChange(event) {
		this.setState({ surnameValue: event.target.value });
	}


	render (){
		return (
			<div>
				<FieldGroup id="name" label="სახელი" type="text" onChange={this.onNameChange} />
				<FieldGroup id="surname" label="გვარი" type="text" onChange={this.onSurnameChange} />

				<FieldGroup id="username" validState={this.props.validState} 
							label="username" 
							type="text" value={this.state.nameValue + ' ' + this.state.surnameValue} disabled 
							help={this.props.help} feedback={true} />
			</div>
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

class EmailComponent extends Component {
	render (){
		return (
			<FormGroup controlId="email" validState={this.props.validState} >
				<InputGroup>
					<InputGroup.Addon>@</InputGroup.Addon>
					<FormControl type="text" />
				</InputGroup>
				{this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
				<FormControl.Feedback />
			</FormGroup>
		);
	}
}