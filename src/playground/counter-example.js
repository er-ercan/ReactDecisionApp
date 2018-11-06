class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.state = {
            count: props.count,
            name: ''
        };
    }

    componentDidMount(){

    }
    componentDidUpdate(prevProps, prevState){

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
Counter.defaultProps = {
    count: 0
};
const yaz = document.getElementById('app');
ReactDOM.render(<Counter />, yaz);
/* State kullanmadan yapılan counter app */
// let count = 0;
// const addOne = () => {
//     count += 1;
//     renderCounterApp();
   
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
// const someId = "myIdHere";

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={someId} className="button" onClick={addOne}>+1</button> {/*class="" bu sekilde değil className ="" seklinde tanımlanır */}
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
        
//         );
       
//         ReactDOM.render(templateThree, appRoot);
// };
//     renderCounterApp();