import React, {Component} from 'react';
import {Media, Image} from 'react-bootstrap';


class MyMedia extends Component {

	render (){
		return (
			<Media.ListItem>
				<Media.Left>
					<Image width={64} height={64} src={this.props.imgURL} circle />
				</Media.Left>
				<Media.Body>
					<Media.Heading>{this.props.username}</Media.Heading>
					{this.props.text}
				</Media.Body>
			</Media.ListItem>
		);
	}
}

export default MyMedia;