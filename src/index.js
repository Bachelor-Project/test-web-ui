import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import WriteSolution from './solution/taskSolution';
import ModalParent from './modal';
import TaskUploadTester from './upload/taskUploader';
import TopicUploaderTest from './upload/topicUploader';
import AppRouter from './router/testTornadoesRouter';
import TopicDep from './departments/topic/TopicDep';
import TaskDep from './departments/task/TaskDep';
import SideMenu from './sidemenu';

import FileUploadTest from './testFileUpload';


// ReactDOM.render(<AppRouter />, document.getElementById('root'));

// ReactDOM.render(<WriteSolution />, document.getElementById('root'));
// ReactDOM.render(<ModalParent />, document.getElementById('root'));
// ReactDOM.render(<TopicUploaderTest />, document.getElementById('root'));
// ReactDOM.render(<TopicDep />, document.getElementById('root'));

// ReactDOM.render(<TaskDep />, document.getElementById('root'));
// ReactDOM.render(<WriteSolution />, document.getElementById('root'));

ReactDOM.render(<FileUploadTest />, document.getElementById('root'));


registerServiceWorker();
