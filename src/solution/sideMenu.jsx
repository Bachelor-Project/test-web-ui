import React, {Component} from 'react';
import MetisMenu from 'react-metismenu';
import './sideMenu_style.css';

class SideMenu extends Component {


	render() {
		return (
			<MetisMenu  content={this.props.content} />
		);
	}
}

export default SideMenu;