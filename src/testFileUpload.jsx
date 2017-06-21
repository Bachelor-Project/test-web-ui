import React, {Component} from 'react';
import {form} from 'react-bootstrap';

class FileUploadTest extends Component {

	handleSubmit = () => {
		alert("submit");
	}

	render (){
		return (
			<div>
				<h1>Upload a File</h1>
		        <form  action="http://localhost:8080/TestFileUpload/rest/files/upload" method="post" encType="multipart/form-data" >
		           <p>
		            Select a file: <input type="file" name="file-1" size="50" />
		           </p>
		           <input type="submit" value="Upload It" />
		        </form>
	        </div>
		);
	}
}

export default FileUploadTest;


// action="rest/files/upload" method="post" encType="multipart/form-data"

// <form  onSubmit={this.handleSubmit} method="POST" >