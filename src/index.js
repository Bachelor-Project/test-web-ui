import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import WriteSolution from './solution/taskSolution';
import TaskUploadTester from './upload/taskUploader';
import TopicUploadTester from './upload/topicUploader';


/* ReactDOM.render(<App />, document.getElementById('root')); */
ReactDOM.render(<TaskUploadTester />, document.getElementById('root'));
/*ReactDOM.render(<TopicUploadTester />, document.getElementById('root'));*/
registerServiceWorker();
