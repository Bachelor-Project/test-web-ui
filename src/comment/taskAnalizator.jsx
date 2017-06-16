import React, {Component} from 'react';
import {Panel, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import MyMedia from './media';
import {Media, Image} from 'react-bootstrap';


class Analyzator extends Component {

	constructor(props) {
		super(props);

		this.state = {
			comments: []
		}
	}

	handleComment = (comment) => {
		console.log('make comment: ');

		var allComments = this.state.comments.slice();
		allComments.push(comment);
		this.setState({ comments: allComments });

	}

	render (){
		const url = "https://lh3.googleusercontent.com/X-e8ol99z-1kGJ_EmqqfN-nqDvNMKiTEUlIWtGk-L4NxkVX3-8qThkVJKaUgF5iJFA=w300";
		var listItems = [];

		this.props.taskComments.forEach( function(elem) {
			listItems.push(
						<Media.ListItem key={elem.id} >
											<Media.Left>
												<Image width={64} height={64} src={url} circle />
											</Media.Left>
											<Media.Body>
												<Media.Heading>{elem.username}</Media.Heading>
												{elem.text}
											</Media.Body>
										</Media.ListItem>
				);
		});
		return (
			<div style={{position: 'relative', display: 'inline'}} >
				<div >
					<Media.List>
						{listItems}
					</Media.List>
					{ /* <CommentList comments={taskComments} style={{position: 'absolute', left: '0px'}}/> */}
				</div>
				<div style={{width: '8px', backgroundColor: 'black'}} >
				</div>
				<div>
					<form >
						<FormGroup controlId="commentText">
							<FormControl componentClass="textarea" rows={4} cols={20} placeholder="ანალიზი" 
											onChange={this.onTextChange} />
						</FormGroup>
						{' '}
						<Button type="submit" onClick={this.props.onPublish} >გამოქვეყნება</Button>
					</form>
					{/* <NewComment onAdd={this.handleComment} style={{position: 'absolute', right: '0px'}}/> */ }
				</div>
			</div>
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
	}

	render (){
		return (
			<form >
				<FormGroup controlId="commentText">
					<FormControl componentClass="textarea" rows={4} cols={20} placeholder="ანალიზი" 
									onChange={this.onTextChange} />
				</FormGroup>
				{' '}
				<Button type="submit" onClick={this.props.onPublish} >გამოქვეყნება</Button>
			</form>
		);
	}
}


class CommentList extends Component {

	render (){
		const url = "https://lh3.googleusercontent.com/X-e8ol99z-1kGJ_EmqqfN-nqDvNMKiTEUlIWtGk-L4NxkVX3-8qThkVJKaUgF5iJFA=w300";
		var listItems = [];
		this.props.comments.forEach((elem) => {
			listItems.push(
						<Media.ListItem key={elem.id} >
											<Media.Left>
												<Image width={64} height={64} src={url} circle />
											</Media.Left>
											<Media.Body>
												<Media.Heading>{elem.username}</Media.Heading>
												{elem.text}
											</Media.Body>
										</Media.ListItem>
				);
		});
		// const listItems = this.props.comments.map((elem) => {
		// 						return (<Media.ListItem key={elem.id} >
		// 									<Media.Left>
		// 										<Image width={64} height={64} src={url} circle />
		// 									</Media.Left>
		// 									<Media.Body>
		// 										<Media.Heading>{elem.username}</Media.Heading>
		// 										{elem.text}
		// 									</Media.Body>
		// 								</Media.ListItem>);
		// 					});

		return (
			<Media.List>
				{listItems}
			</Media.List>
		);
	}
}


const taskComments = [
	{
		id: 1,
		username: "Bob",
		text: "ბომბა ამოცანა იყო"
	},
	{
		id: 2,
		username: "Alice",
		text: "კაი ერთი"
	}
];