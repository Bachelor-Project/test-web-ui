import React, {Component} from 'react';
import {Table, Checkbox, Button} from 'react-bootstrap';



class TestsComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: 0,
			selectedTestsCount: 0,
			selectedTestsNames: [],

			allEnableTest: this.props.tests.length,
			selectedAllTest: false,
			changeByChild: false
		}
	}

	onAllTestClick = (event) => {
		const checked = event.target.checked;

		this.setState({
			value: (checked) ? 1 : 0,
			selectedTestsCount: (checked) ? this.state.allEnableTest : 0,
			selectedTestsNames: (checked) ? this.props.tests.map(t => t.name) : [],
			selectedAllTest: checked
		});
	}


	handleChildSelectChange = (checked, testName) => {
		alert(checked);

		if (!checked && this.state.selectedAllTest){
			let newTestsCount = this.state.testsCount - 1;
			const newValueChange = newTestsCount == 0 ? 0 : 2;
			let newSelected = this.state.selectedTestsNames.slice().push(testName);
			this.setState({ 
							testsCount: newTestsCount,
							selectedTestsNames: newSelected,
							selectedAllTest: false, 
							changeByChild: true, 
							value: newValueChange 
						});
		}
		if (checked) {
			let newTestsCount = this.state.testsCount + 1;
			const sizeIsFill = (newTestsCount === this.state.allEnableTest);
			const newValueChange = sizeIsFill ? 1 : this.state.value;

			let newSelected = this.state.selectedTestsNames.filter(name => name !== testName);

			this.setState({ 
							testsCount: newTestsCount, 
							selectedTestsNames: newSelected,
							selectedAllTest: sizeIsFill,
							value: newValueChange
						});
		}
		
	}


	render() {

		const selectedBoxes = this.state.selectedTestsNames;
		var isSelectedAll = this.state.selectedAllTest;
		var testElements = [];
		const childValueChange = this.handleChildSelectChange;
		const changeFromChild = this.state.changeByChild;

		const value = this.state.value;
		if (this.props.tests !== undefined){
			this.props.tests.forEach( function(testData){
				var selected = selectedBoxes.includes(testData.name);
				testElements.push(<TestElement key={testData.name} selectedAll={isSelectedAll} 
												changeByAnyChild={changeFromChild} 
												data={testData} onValueChange={childValueChange} 
												parentValue={value} 
												selected={selected} />);
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
		this.props.onValueChange(event.target.value, this.props.data.name);
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
		// const pv = this.props.parentValue;
		// console.log((pv == 2) ? "axla selected: " + this.state.isDisabled : '');
		// const selected = (pv == 2 || this.state.isDisabled) ? this.state.selected : pv == 1;

		const inputs = this.getSlices('\n', this.props.data.input);
		const outputs = this.getSlices('\n', this.props.data.output);

		return (
			<tr>
				<td>
					<Checkbox disabled={this.state.isDisabled} onClick={this.onTestClick}
							checked={this.props.selected} ></Checkbox>
				</td>
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