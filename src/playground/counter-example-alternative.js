class CounterAlternative extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAddOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne(){
        this.setState((prevState) =>{
            return{
                count: prevState.count -1
            }
        });
    }
    resetAll(){
        this.setState({count:0})
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.resetAll}>Reset</button>
            </div>
        );
    }
}

const htm = document.getElementById('app');
ReactDOM.render(<CounterAlternative />, htm);