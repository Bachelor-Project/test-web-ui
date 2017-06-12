import React, {Component} from 'react';
import {Table, Checkbox, Button} from 'react-bootstrap';


class TestsComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedAllTest: false,
			changeByChild: false,
			testsCount: 0,
			allEnableTest: this.props.tests.length
		}
	}

	onAllTestClick = (event) => {
		if (event.target.checked){
			this.setState({ testsCount: this.state.allEnableTest });
		}
		else {
			this.setState({ testsCount: 0 });
		}
		this.setState({ selectedAllTest: !this.state.selectedAllTest, changeByChild: false });
	}


	handleChildSelectChange = (checked) => {
		if (!checked && this.state.selectedAllTest){
			const newValue = this.state.testsCount - 1;
			this.setState({ testsCount: newValue, selectedAllTest: false, changeByChild: true });
		}
		if (checked) {
			const newValue = this.state.testsCount + 1;
			this.setState({ testsCount: newValue, selectedAllTest: (newValue === this.state.allEnableTest), changeByChild: true });
		}
		
	}


	render() {
		var isSelectedAll = this.state.selectedAllTest;
		var testElements = [];
		const childValueChange = this.handleChildSelectChange;
		const changeFromChild = this.state.changeByChild;
		if (this.props.tests !== undefined){
			this.props.tests.forEach( function(testData){
				testElements.push(<TestElement key={testData.name} selectedAll={isSelectedAll} changeByAnyChild={changeFromChild} 
												data={testData} onValueChange={childValueChange} />);
			});
		}

		return (
			<div style={{overflow: 'auto', maxHeight: '200px', }} >
				<Table responsive >
					<thead>
						<tr>
							<th>
								<Checkbox onClick={this.onAllTestClick} checked={this.state.selectedAllTest} ></Checkbox>
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
			</div>
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

	onTestClick = (event) => {
		this.setState({ isSelected : event.target.checked });
		this.props.onValueChange(event.target.checked);

		// this.setState((prevState, props) => ({
		//   counter: prevState.counter + props.increment
		// }));

		// this.setState({ isSelected: !this.state.isSelected });
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
		// console.log(this.props.changeByAnyChild);
		if (!this.props.changeByAnyChild){
			this.setState({ isSelected: this.props.selectedAll && !this.state.isDisabled });
		}
		// var value = this.props.changeByAnyChild ? this.state.isSelected
		// 										: this.props.selectedAll && !this.state.isDisabled;

		const inputs = this.getSlices('\n', this.props.data.input);
		const outputs = this.getSlices('\n', this.props.data.output);

		return (
			<tr>
				<td><Checkbox disabled={this.state.isDisabled} onClick={this.onTestClick} checked={this.state.isSelected} ></Checkbox></td>
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