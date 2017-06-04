import React, {Component} from 'react';
import {Table, Checkbox, Button} from 'react-bootstrap';


class TestsComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedAllTest: false,
			testsCount: 0
		}
	}

	onAllTestClick = (event) => {
		if (event.target.checked){
			this.setState({ testsCount: this.props.tests.length });
		}
		else {
			this.setState({ testsCount: this.props.tests.length });
		}
		this.setState({ selectedAllTest: !this.state.selectedAllTest });
	}


	render() {
		var isSelectedAll = this.state.selectedAllTest;
		var testElements = [];
		if (this.props.tests !== undefined){
			this.props.tests.forEach( function(testData){
				testElements.push(<TestElement key={testData.name} selectedAll={isSelectedAll} data={testData} />);
			});
		}

		return (
			<Table responsive>
				<thead>
					<tr>
						<th>
							<Checkbox onClick={this.onAllTestClick}></Checkbox>
						</th>
						<th>ტესტი</th>
						<th>Input</th>
						<th>Output</th>
					</tr>
				</thead>
				<tbody>
					{testElements}
				</tbody>
			</Table>
		);
	}
}

export default TestsComponent;


class TestElement extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isSelected: false,
			isDisabled: false
		}
	}

	onTestClick = () => {
		this.setState({ isSelected: !this.state.isSelected });
	}

	onTestDisable = () => {
		this.setState({ isDisabled: !this.state.isDisabled });
	}

	getSlices(symbol, data) {
		return  data.split(symbol).map(function(elem, i){
					return (<p key={i}>{elem}</p>);
				});
	}

	render() {
		var value = false; 
		if (!this.state.isDisabled) {
			value = this.props.selectedAll;
		}

		const inputs = this.getSlices('\n', this.props.data.input);
		const outputs = this.getSlices('\n', this.props.data.output);

		return (
			<tr>
				<td><Checkbox disabled={this.state.isDisabled} onClick={this.onTestClick} checked={value} ></Checkbox></td>
				<td>
					{this.props.data.name}
					<Button onClick={this.onTestDisable}>click</Button>
				</td>
				<td>{inputs}</td>
				<td>{outputs}</td>
			</tr>
		);
	}
}