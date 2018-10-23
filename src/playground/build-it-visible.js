class ToggleVisibility extends React.Component {
     
    constructor(props){
        super(props);
        this.toggleActionVisibility = this.toggleActionVisibility.bind(this);
        this.state = {
            visibility:false
        }
    }
    toggleActionVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            }
        });
    }

    render(){
        return (
            <div>
                <h1>
                    Visibility Toggle
                </h1>
                <button onClick = {this.toggleActionVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                    <p>Hey These are some details you can see !</p>
                    </div>
                )}
            </div>
    
        );
    }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));




/*let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>
                Visibility Toggle
            </h1>
            <button onClick = {toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <div>
                <p>Hey These are some details you can see !</p>
                </div>
            )}
        </div>

    );
    ReactDOM.render(jsx, document.getElementById('app'))
}
render(); */