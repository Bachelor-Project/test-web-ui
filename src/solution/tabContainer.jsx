import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';


class TabContainer extends Component {

	render (){
		var tabElements = [];
		this.props.tabs.forEach( function(tab, i) {
			tabElements.push(<Tab eventKey={i+1} key={i} id={tab.htmlID} title={tab.title}>{tab.content}</Tab>);
		});

		return (
			<Tabs defaultActiveKey={1} id={this.props.id} >
				{tabElements}
		  	</Tabs>
		);
	}
}

export default TabContainer;

