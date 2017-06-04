import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, option, HelpBlock} from 'react-bootstrap';


export function FieldGroup({id, label, help, ...props}) {
	return (
		<FormGroup controlId={id}>
      		{label && <ControlLabel>{label}</ControlLabel>}
      		<FormControl {...props} />
	      {help && <HelpBlock>{help}</HelpBlock>}
	    </FormGroup>
	);
}


export class Selector extends Component {

	constructor(props) {
		super(props);

		this.state = {
			searchValue: ''
		}
	}

	
	onSearchChange = (event) => {
		this.setState({ searchValue: event.target.value });
	}


	render() {
		const lowerCaseSearchVal = this.state.searchValue.toLowerCase();
		const options = this.props.selectorData.map( function(elem, index){
			if (!elem.toLowerCase().includes(lowerCaseSearchVal)) return null;
			return (<option key={index} value={elem}>{elem}</option>);
		});

		return (
			<div>
				<FormGroup controlId="MultySelectorId">
					<ControlLabel>{this.props.title}</ControlLabel>
					{this.props.searchable && <FormControl type="text" placeholder="ძებნა" onChange={this.onSearchChange} />}
					<FormControl componentClass="select" multiple={this.props.isMultiple} >
						{options}
					</FormControl>
				</FormGroup>
			</div>
		);
	}
}
