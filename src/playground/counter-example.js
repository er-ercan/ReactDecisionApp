class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.state = {
            count: 0,
            name: ''
        };
    }

    componentDidMount() {
        try{
			const stringCount = localStorage.getItem("count");
			const count = parseInt(stringCount, 10);
	
			if(!isNaN(count)){
				this.setState(() => ({ count }));
				
			}
		} catch(e){

        }
        
		console.log("Fetching Data(Tr:Verileri getirmek için)");
    
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
			localStorage.setItem("count",this.state.count);
			console.log("Saving Data (Tr: Verileri Kaydetmek için)");
		}
    }
    componentWillUnmount(){

    }
    handleAddOne() {
        this.setState({
            count: this.state.count +1,
            name: 'You clicked +1 button'
                    }); //Bu şekildede yazılabiliyor
    }
    handleMinusOne() {
        this.setState((prevState) => { //Bu şekilde yazmak daha doğru
            return{
                count: prevState.count -1,
                name: 'You clicked -1 button'
            }
        });
    }
    resetAll() {
        this.setState((prevState) =>{
            return{
                count: 0,
                name: prevState.name
            }
        });
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count} </h2>
                <p>{this.state.name}</p>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.resetAll}>Reset</button>
            </div>
        );
    }

}

const yaz = document.getElementById('app');
ReactDOM.render(<Counter />, yaz);