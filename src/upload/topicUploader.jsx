import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import CustomUploadModal from './customModal';
import {FieldGroup, Selector} from './customFields';


class TopicUploader extends Component {

	constructor(props) {
		super(props);
	}

	render (){
		return (
			<form>
				<FieldGroup id="name" type="text" placeholder="თემის დასახელება" />
				<FieldGroup id="file" label="აირჩიეთ თემის ფაილი" type="file" />
				<Selector title="მთავარი თემა" selectorData={topics} isMultiple={false} searchable={true} />
				<FieldGroup id="type" type="text" placeholder="ტიპი" />
				<FieldGroup id="priority" type="number" placeholder="პრიორიტეტი" />
			</form>
		);
	}
}


const topics = [
	"გრაფი",
	"ალგებრა",
	"გეომეტრია",
	"N*Log(N)"
];

class TopicUploaderTest extends Component {

	constructor(props) {
		super(props);

		this.state = {
			show: false
		}
	}

	onUploadClick = () => {
		this.setState({ show: true });
	}

	onCloseClick = () => {
		this.setState({ show: false });
	}

	render() {
		return (
			<div>
				<Button onClick={this.onUploadClick}>Upload Topic</Button>
				<CustomUploadModal title="თემის ატვირთვა" show={this.state.show} onHide={this.onCloseClick} body={<TopicUploader />} />
			</div>
		);
	}
}

export default TopicUploaderTest;