import React, {Component} from 'react';
import MetisMenu from 'react-metismenu';


class SideMenu extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MetisMenu content={this.props.content}/>
		);
	}
}

export default SideMenu;