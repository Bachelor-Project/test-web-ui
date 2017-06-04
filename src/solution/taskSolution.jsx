import React, {Component} from 'react';
import HeaderNavBar from './headerNavBar';
import SideMenu from './sideMenu';
import TabContainer from './tabContainer';
import Hinter from './hinter';
import TestsComponent from './testsComponent';


const SideContent = [
	{
		icon: '',
        label: 'Level 1',
        content: [
            {
                icon: '',
                label: 'task 1',
            },
			{
				icon: '',
                label: 'task 2'
			}
		]      
	},
	{
		icon: '',
        label: 'Level 2',
        content: [
            {
                icon: '',
                label: 'task 1',
            },
			{
				icon: '',
                label: 'task 2'
			}
		]           
	}
];

const tests = [
	{
		name: '01',
		input: '5 5 1 999\n3 2 4',
		output: '3 3 4'
	},
	{
		name: '02',
		input: '5 5 2 1000\n1 1 1\n4 4 3',
		output: '1 1 1\n4 4 3'
	},
	{
		name: '03',
		input: '5 5 2 1000\n1 1 1\n4 4 3',
		output: '1 1 1\n4 4 3'
	}
];

const taskTabs = [
	{
		title: "პირობა",
		content: "ამოცანა ბლა ბლა ბლა"
	},
	{
		title: "ტესტები",
		content: <TestsComponent tests={tests} />
	}
];

const solTabs = [
	{
		title: "ამოხსნა",
		content: "ამოხსნა ბლა ბლა ბლა"
	},
	{
		title: "ანალიზი",
		content: "ანალიზი ბლა ბლა ბლა"
	}
];

const hinters = [
	{
		title: 'მითითება N1',
		content: 'რისი თავიც არ გაქ არ უნდა აკეთო!'
	},
	{
		title: 'მითითება N2',
		content: 'გადახედეთ პირველ მითითებას!'
	}
];


class WriteSolution extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<HeaderNavBar />
				<main>
					<SideMenu content={SideContent} />
					<div className="container">
						<TabContainer id="taskData" tabs={taskTabs} />
						<TabContainer id="solutoinData" tabs={solTabs} />
						<Hinter hinters={hinters} />
					</div>
				</main>
			</div>
		);
	}
}

export default WriteSolution;


/*<SideMenu />
			<main>
				<TaskData />
				<SolutionData />
				<Hinter />
			</main>*/