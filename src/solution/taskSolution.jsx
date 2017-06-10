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

const taskContentText = ("ამოცანა B. ლამაზი მწკრივი \n" +
					" შემავალი ფაილი: b.in გამომავალი ფაილი: b.out\n" +
					"დროის ლიმიტი: 3 წამი\n" +
					"მეხსიერების ლიმიტი: 256 მბ\n" +
		"ალი-ამირმა ამოწერა N ცალი რიცხვი ერთ მწკრივში. მწკრივი ითვლება ლამაზად, თუ მასში შემავალი ნებისმიერი ორი მეზობელი  წევრის ორობით ან სამობით ჩანაწერში ტოლი რაოდენობის 1-იანია. ალი-ამირს აინტერესებს, რამდენი განსხვავებული ვარიანტი არსებობს ისეთი ლამაზი მწკრივის მისაღებად, რომელიც ყველა მოცემული N ცალი რიცხვისაგან შედგება.\n" +
		"შემავალი მონაცემები : პირველ სტრიქონში ერთი მთელი რიცხვი N (2 <= N <=20). მეორე სტრიქონში N ცალი მთელი დადებითი რიცხვი, რომელთაგან თითოეული არ აღემატება 109 (მილიარდს). \n" +
		"გამომავალი მონაცემები : ერთადერთ სტრიქონში ერთი მთელი რიცხვი:  მოცემული N ცალი რიცხვისაგან შედგენილი ყველა ლამაზი მწკრივის  რაოდენობა.\n"+
		"განმარტება:\n" +
		"მაგალითში 5 = 123 და 1 = 13, 5 = 1012 და 6 = 1102, ამიტომ არსებობს ორი მიმდევრობა: 1, 5, 6 და 6, 5, 1. \n" +
		"ტესტების 25%–სათვის  N <= 4.\n" +
		"ტესტების 50%–სათვის N <= 10\n" 
		+
		"ამოცანა B. ლამაზი მწკრივი \n" +
					" შემავალი ფაილი: b.in გამომავალი ფაილი: b.out\n" +
					"დროის ლიმიტი: 3 წამი\n" +
					"მეხსიერების ლიმიტი: 256 მბ\n" +
		"ალი-ამირმა ამოწერა N ცალი რიცხვი ერთ მწკრივში. მწკრივი ითვლება ლამაზად, თუ მასში შემავალი ნებისმიერი ორი მეზობელი  წევრის ორობით ან სამობით ჩანაწერში ტოლი რაოდენობის 1-იანია. ალი-ამირს აინტერესებს, რამდენი განსხვავებული ვარიანტი არსებობს ისეთი ლამაზი მწკრივის მისაღებად, რომელიც ყველა მოცემული N ცალი რიცხვისაგან შედგება.\n" +
		"შემავალი მონაცემები : პირველ სტრიქონში ერთი მთელი რიცხვი N (2 <= N <=20). მეორე სტრიქონში N ცალი მთელი დადებითი რიცხვი, რომელთაგან თითოეული არ აღემატება 109 (მილიარდს). \n" +
		"გამომავალი მონაცემები : ერთადერთ სტრიქონში ერთი მთელი რიცხვი:  მოცემული N ცალი რიცხვისაგან შედგენილი ყველა ლამაზი მწკრივის  რაოდენობა.\n"+
		"განმარტება:\n" +
		"მაგალითში 5 = 123 და 1 = 13, 5 = 1012 და 6 = 1102, ამიტომ არსებობს ორი მიმდევრობა: 1, 5, 6 და 6, 5, 1. \n" +
		"ტესტების 25%–სათვის  N <= 4.\n" +
		"ტესტების 50%–სათვის N <= 10\n");

const taskTabs = [
	{
		title: "პირობა",
		content: <TaskContent text={taskContentText} />
	},
	{
		title: "ტესტები",
		content: <TestsComponent tests={tests} />
	}
];

function TaskContent(props) {
	var entries = [];
	var slices = props.text.split('\n');
	slices.forEach((line, i) => {
		entries.push(<p key={i}>{line}</p>);
	});
	return (
		<div>
			{entries}
		</div>
	);
}

const solutionTabs = [
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
		id: 1,
		code: false,
		title: 'მითითება N1',
		content: 'რისი თავიც არ გაქ არ უნდა აკეთო!'
	},
	{
		id: 2,
		code: false,
		title: 'მითითება N2',
		content: 'გადახედეთ პირველ მითითებას!'
	},
	{
		id: 3,
		code: true,
		title: 'Java',
		content: 'public static void main(String[] args){...}'
	},
	{
		id: 4,
		code: true,
		title: 'C++',
		content: 'int main(){ return 0;}'
	}
];





class WriteSolution extends Component {

	constructor(props) {
		super(props);

		this.state = {
			headerTarget: taskDataTabID
		}
	}

	handleCondition = () => {
		this.setState({ headerTarget: taskDataTabID });
	}

	handleSolution = () => {
		this.setState({ headerTarget: solutionDataTabID });
	}

	handleHinter = () => {
		this.setState({ headerTarget: hinterID });
	}

	render() {
		return (
			<div style={{position: 'relative'}}>
				<HeaderNavBar target={this.state.headerTarget} onConditionClick={this.handleCondition}
									onSolutionClick={this.handleSolution} onHinterClick={this.handleHinter} />
				<div style={{position: 'fixed', left: '0px', top: '8%', width: '16%'}} >
					<SideMenu content={SideContent} />
				</div>
				<div className="container" style={{position: 'absolute', right: '0px', top: '54px', width: '84%'}}>
					<TabContainer id={taskDataTabID} tabs={taskTabs} />
					<TabContainer id={solutionDataTabID} tabs={solutionTabs} />
					<Hinter id={hinterID} hinters={hinters} />
				</div>
			</div>
		);
	}
}

export default WriteSolution;

const taskDataTabID = "uncontrolled-taskData";
const solutionDataTabID = "uncontrolled-solutoinData";
const hinterID = "hinter";