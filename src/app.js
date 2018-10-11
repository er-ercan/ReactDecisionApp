class IndecisionApp extends React.Component {
  render() {

    const title = "Decision App";
    const subtitle = "Put your life in the hands of God";
    const options = ["Ercan","Hakan","Mehmet"];
    return (
      <div>
        <Header title = {title} subtitle={subtitle}/>
        <Action />
        <Options options = {options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const option = "Option component here!";
    return (
      <div>
        {this.props.options.length}
        <Option option={option} />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    
    return (
      <div>
        {this.props.option}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption component here!
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
