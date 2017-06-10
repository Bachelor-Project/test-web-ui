import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import CustomUploadModal from './customModal';
import {FieldGroup, Selector} from './customFields';


class TaskUploadTester extends Component {

	constructor(props) {
		super(props);

		this.state = {
			show: false
		}
	}


	onOpenClick = () => {
		this.setState({ show: true });
	}


	handleClose = () => {
		this.setState({ show: false });
	}


	render (){
		return (
			<div>
				<Button onClick={this.onOpenClick}>Upload Task</Button>
				<CustomUploadModal title="ამოცანის ატვირთვა" show={this.state.show} onHide={this.handleClose} body={<TaskUploader />} />
			</div>
		);
	}
}

export default TaskUploadTester;



class TaskUploader extends Component {

	constructor(props) {
		super(props);

		
	}

	onUploadClick = () => {
		alert("Upload");
	}


	render(){
		return (
			<form>
				<FieldGroup id="conditionFormGr" label="აირჩიეთ ამოცანის ფაილი" type="file" />
				<FieldGroup id="testFormGr" label="აირჩიეთ ტესტების ფაილის არქივი" type="file" />
				<FieldGroup id="hinterFormGr" label="აირჩიეთ მითითებების ფაილი" type="file" />
				<Selector title="შეიძლება დაიწეროს:" selectorData={languages} isMultiple={true} searchable={true} />
				<Selector title="თემა" selectorData={topics} isMultiple={true} searchable={true} />
				<Selector title="დონე" selectorData={levels} isMultiple={false} searchable={false} />
			</form>
		);
	}
}


const languages = [
	"ყველა",
	"Java",
	"c++",
	"Python",
	"Pascal"
];

const topics = [
	"გრაფი",
	"ალგებრა",
	"გეომეტრია",
	"N*Log(N)"
];

const levels = [
	"მარტივი",
	"საშუალო",
	"რთული"
];