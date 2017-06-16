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


// ReactDOM.render(<AppRouter />, document.getElementById('root'));

<<<<<<< HEAD
ReactDOM.render(<WriteSolution />, document.getElementById('root'));
// ReactDOM.render(<TaskUploadTester />, document.getElementById('root'));
=======
// ReactDOM.render(<WriteSolution />, document.getElementById('root'));
// ReactDOM.render(<ModalParent />, document.getElementById('root'));
ReactDOM.render(<TopicUploaderTest />, document.getElementById('root'));
>>>>>>> origin/master
registerServiceWorker();
