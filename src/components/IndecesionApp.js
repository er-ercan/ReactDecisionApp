import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';


export default class IndecisionApp extends React.Component {
	constructor(props) {
		super(props); //The super keyword is used to access and call functions on an object's parent.
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
		};
	}

	componentDidMount(){

		try{
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);
	
			if(options){
				this.setState(() => {
					return {
						options: options
					}
				});
			}
		} catch(e){

		}
	
		
		console.log("Fetching Data(Tr:Verileri getirmek için)");
	}
	componentDidUpdate(prevProps, prevState){
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options",json);
			console.log("Saving Data (Tr: Verileri Kaydetmek için)");
		}
		
	}
	componentWillUnmount(){
		console.log("");
	}


	handleDeleteOptions() {
		/* this.setState(() => {
            return {
                options:[]
            }
        }); */
		//We can write this instead.
		this.setState(() => ({ options: [] })); //This is not need return keyword.
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options:prevState.options.filter((option)=> {
				return optionToRemove !== option;
			})
		}));
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	handleAddOption(option) {
		if (!option) {
			return "Enter Valid Value Please";
		} else if (this.state.options.indexOf(option) > -1) {
			return "This option already exist!";
		}

		this.setState(prevState => ({
			//This is implicit return
			options: prevState.options.concat(option)
		}));
	}

	render() {
		const subtitle = "Put your life in the hands of a computer";
		return (
			<div>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}
