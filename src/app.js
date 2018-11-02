class IndecisionApp extends React.Component {
	constructor(props) {
		super(props); //The super keyword is used to access and call functions on an object's parent.
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: props.options
		};
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
		console.log("hdo", option);
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
const Header = props => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
			<h3>{props.sub}</h3>
		</div>
	);
};

Header.defaultProps = {
	title: "Indecesion Applicaton",
	sub: "Enter your task and choose randomly",
	subtitle: "GitHub React Project By Ercan Er"
};

IndecisionApp.defaultProps = {
	options: []
};

const Action = props => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={!props.hasOptions}>
				What should I do ?
			</button>
		</div>
	);
};

const Options = props => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.map(option => (
				<Option
					key={option}
					optionText={option}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))}
		</div>
	);
};

const Option = props => {
	return (
		<div>
			{props.optionText}
			<button
			 onClick={(e) => {
				 props.handleDeleteOption(props.optionText)
			 } }
			 >
			 Remove
			 </button>
		</div>
	);
};

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}

	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		e.target.elements.option.value = "";

		this.setState(() => ({ error }));
	}

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}

				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" className="" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}


ReactDOM.render(
	<IndecisionApp options={["Default 1", "Default 2"]} />,
	document.getElementById("app")
);

// Stateless functional component
// These two can and should live alongside one another
// if we do need some of  advanced features like use class based component
// if you dont and you find yourself creating a class that just has a render method its probably best
// to conver it stateless functional component

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//             <h3>{this.props.sub}</h3>
//             </div>
//         );
//     }
// }

// class Action extends React.Component {
//     render(){
//         return (
//             <div>
//                 <button
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}>
//                 What should I do ?
//                 </button>
//             </div>
//         );
//     }
// }

// class Options extends React.Component {
//     render(){
//         return (
//             <div>

//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.options.map((option) => <Option key={option} optionText={option}/>)
//             }
//                 {/* <p>{this.props.options.length}</p> */}
//             </div>
//         );
//     }
// }

// class Option extends React.Component {
//     render() {
//         return <div>
//             {this.props.optionText}
//         </div>;
//     }
// }

/* -----------------------------------------------------------------  */
// const User = (props) => {
//     return (
//         <div>
//             <p>
//                 Name: {props.name}
//             </p>
//             <p>
//                 Age:{props.age}
//             </p>
//         </div>
//     );
// }

/*bind() method example
const obj = {
    name: "Ercan Er",
    getName() {
        return this.name;
    }
};

const getName = obj.getName.bind({name: "Bok"});
console.log(getName());
*/
