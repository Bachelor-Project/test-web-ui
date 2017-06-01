import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import './sidemenu_style.css';
import {BrowserRouter} from 'react-router-dom';
import RouterHeader from './router/Header';
import MyRouter from './router/router';

class SideMenu extends Component {
	render (){
		return (
			<Menu width={ '16%' }>
				<RouterHeader homePath="/router" accountPath="/router/account" />
		    </Menu>
		);
	}
}

export default SideMenu;