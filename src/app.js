//bind() method example
/*const obj = {
    name: "Ercan Er",
    getName() {
        return this.name;
    }
};

const getName = obj.getName.bind({name: "Bok"});
console.log(getName());
*/
class IndecisionApp extends React.Component {
    render() {
        const title = "Indecisions App";
        const subHeader = "Striker Tech";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["Ercan","Hande","Işıl"];
        return (
        <div>
            <Header title={title} sub={subHeader} subtitle={subtitle} />
            <Action />
            <Options options ={options}  />
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
    handlePick () {
        alert('Ercan Er');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do ?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);//Burası anlasılmadı burayı tekrar et bind ve this konusunu araştır.
    }

    removeAll() {
        console.log(this.props.options);   
    }
    render(){
        return (
            <div>
            <button onClick={this.removeAll}>Remove All</button>
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