class IndecisionApp extends React.Component {
    render() {
        const title = "Indecisions App";
        const subtitle = "Put ypour life in the hands of a computer";
        const options = ["Ercan","Hande","Işıl"];
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
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
    removeAll() {
        alert("silindi");
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