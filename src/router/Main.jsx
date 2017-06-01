import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Home from './home';
import Account from './account/Account';


class RouterMain extends Component {

	render (){
		return (
			<main>
				<Switch >
					<RouteComponent exact path={this.props.homePath} component={Home} />
					<RouteComponent path={this.props.accountPath} component={Account} />
				</Switch>
			</main>
		);
	}
}

export default RouterMain;


function RouteComponent({...properties}) {
	return (<Route {...properties} />);
}
