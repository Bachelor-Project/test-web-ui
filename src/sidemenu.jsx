import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import './sidemenu_style.css';

class SideMenu extends Component {
	render (){
		return (
			<Menu width={ '20%' }>
				{/* style={display: "block", outline: "none"} */}
		        <a id="home" className="menu-item" href="/" > 
		        	<i className="fa fa-wf fa-envelope-o" />
		        		<span>Home</span>
	        	</a>
		        <a id="about" className="menu-item" href="/about">About</a>
		        <a id="contact" className="menu-item" href="/contact">Contact</a>
		        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
		     </Menu>
		);
	}
}

export default SideMenu;