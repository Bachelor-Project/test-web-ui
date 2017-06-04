import React, {Component} from 'react';
import {Button, Panel} from 'react-bootstrap';


class Hinter extends Component {

	constructor(props) {
		super(props);
	}

	render (){
		var hinterElements = [];
		if (this.props.hinters !== undefined) {
			this.props.hinters.forEach( function(hinter) {
				hinterElements.push(<HinterElement title={hinter.title} content={hinter.content} />);
			}); 
		}
		return (
			<div>
				{hinterElements}
			</div>
		);
	}
}

export default Hinter;



class HinterElement extends Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false
		}
	}

	onHinterClick = () => {
		this.setState({ open: !this.state.open });
	}

	render () {
		return (
			<div>
				<Button onClick={this.onHinterClick} >
					{this.props.title}
		        </Button>
		        <Panel collapsible expanded={this.state.open}>
		        	{this.props.content}
		        </Panel>
			</div>
		);
	}
}