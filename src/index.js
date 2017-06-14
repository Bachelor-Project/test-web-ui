import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import WriteSolution from './solution/taskSolution';
import ModalParent from './modal';
import TaskUploadTester from './upload/taskUploader';


 ReactDOM.render(<App />, document.getElementById('root')); 

// ReactDOM.render(<WriteSolution />, document.getElementById('root'));
// ReactDOM.render(<TaskUploadTester />, document.getElementById('root'));
registerServiceWorker();
