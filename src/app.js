class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ["Ercan","Ayse","Hande", "Mehmet"]
        }
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options:[]
            }
        });
    }

    handlePick(){
        const randomNum = Math.floor(Math.random()* this.state.options.length);
        const option = this.state.options[randomNum];
       alert(option);
    }
    render() {
        const title = "Indecisions App";
        const subHeader = "Striker Tech";
        const subtitle = "Put your life in the hands of a computer";
        return (
        <div>
            <Header title={title} sub={subHeader} subtitle={subtitle} />
            <Action 
            hasOptions = {this.state.options.length > 0 }
            handlePick = {this.handlePick} />
            <Options 
            options ={this.state.options}  
            handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption />
        </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            <h3>{this.props.sub}</h3>
            </div>
        );
    }
}
class Action extends React.Component {
    render(){
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}>
                What should I do ?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
                {/* <p>{this.props.options.length}</p> */}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return <div>
            {this.props.optionText}
        </div>;
    }
}

class AddOption extends React.Component{
    onFormSubmit(e) {
        e.preventDefault();

        const option =  e.target.elements.option.value.trim();

        if(option){
            alert(option);
        }
    }
    render(){
        return (
            <div>
               <form onSubmit = {this.onFormSubmit}>
                    <input type="text" name="option" className=""></input>
                    <button>Add Option</button>
                   
                </form>
            </div>
        );

    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

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