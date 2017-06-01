import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class RouterHeader extends Component {

	render (){
		return (
			<ul>
		        <li><LinkComponent to={this.props.homePath} label="Home"/></li>
		        <li><LinkComponent to={this.props.accountPath} label="Account"/></li>
	      	</ul>
		);
	}
}

export default RouterHeader;


function LinkComponent(props) {
	return (<Link to={props.to}>{props.label}</Link>);
}