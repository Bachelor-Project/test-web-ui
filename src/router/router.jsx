import React, {Component} from 'react';
import Header from './Header';
import RouterMain from './Main';
import SideMenu from '../sidemenu';


class MyRouter extends Component {

	render (){
		return (
			<div>
				<SideMenu />
				<RouterMain homePath="/router" accountPath="/router/account" />
			</div>
		);
	}
}

export default MyRouter;


