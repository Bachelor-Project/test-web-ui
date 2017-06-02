import React, {Component} from 'react';
import {Panel, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import MyMedia from './media';


class Analyzator extends Component {

	constructor(props) {
		super(props);

		this.state = {
			comments: {}
		}
	}

	handleComment = (comment) => {
		console.log('make comment: ');

		var allComments = this.state.comments;
		allComments.push(comment);
		this.setState({ comments: allComments });

	}

	render (){
		return (
			<Panel header="განხილვა" >
				<NewComment onAdd={this.handleComment} />
				<CommentList list={this.state.comments} />
			</Panel>
		);
	}
}

export default Analyzator;


class NewComment extends Component {

	constructor(props) {
		super(props);

		this.state = {
			text: ''
		}
	}


	onTextChange = (event) => {
		this.setState({ text: event.target.value });
	}

	onPublish = () => {
		this.props.onAdd(<MyMedia text={this.state.text} />);
	}

	render (){
		return (
			<Form inline>
				<FormGroup controlId="commentText">
					<FormControl componentClass="textarea" rows={4} cols={20} placeholder="ანალიზი" onChange={this.onTextChange} />
				</FormGroup>
				{' '}
				<Button type="submit" onClick={this.props.onPublish} >გამოქვეყნება</Button>
			</Form>
		);
	}
}


class CommentList extends Component {

	render (){
		return (
			<div>
			</div>
		);
	}
}