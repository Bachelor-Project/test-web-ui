import React, {Component} from 'react';
import {Media, Image} from 'react-bootstrap';


class MyMedia extends Component {

	render (){
		return (
			<Media>
				<Media.Left>
					<Image width={64} height={64} src="/images/profile/account3.jpg" circle />
				</Media.Left>
				<Media.Body>
					<Media.Heading>{this.props.username}</Media.Heading>
					<p>{this.props.text}</p>
				</Media.Body>
			</Media>
		);
	}
}

export default MyMedia;