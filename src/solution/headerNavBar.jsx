import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


class HeaderNavBar extends Component {

	constructor(props) {
		super(props);

	}


	onConditionClick = () => {

	}

	onSolutionClick = () => {

	}

	onHintClick = () => {

	}

	onTestsClick = () => {

	}


	render() {
		return (
			<Navbar fixedTop >
				<Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#" onClick={this.onConditionClick} active >პირობა</NavItem>
                        <NavItem eventKey={2} href="#" onClick={this.onSolutionClick} >ამოხსნა</NavItem>
                        <NavItem eventKey={3} href="#" onClick={this.onHintClick} >მითითება</NavItem>
                        <NavItem eventKey={4} href="#" onClick={this.onTestsClick} >ტესტები</NavItem>
                    </Nav>
                </Navbar.Collapse>
			</Navbar>
		);
	}
}

export default HeaderNavBar;