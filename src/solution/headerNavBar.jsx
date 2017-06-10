import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


class HeaderNavBar extends Component {


	render() {
		return (
			<Navbar fixedTop >
				<Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href={'#' + this.props.target} onClick={this.props.onConditionClick} active >პირობა</NavItem>
                        <NavItem eventKey={2} href={'#' + this.props.target} onClick={this.props.onSolutionClick} >ამოხსნა</NavItem>
                        <NavItem eventKey={3} href={'#' + this.props.target} onClick={this.props.onHinterClick} >მითითება</NavItem>
                    </Nav>
                </Navbar.Collapse>
			</Navbar>
		);
	}
}

export default HeaderNavBar;