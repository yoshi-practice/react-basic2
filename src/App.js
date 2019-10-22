import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickResult: "",
      changeResult: "",
      inputResult: "",
      keyupResult: ""
    };
  }

  onClick() {
    this.setState({
      clickResult: "clicked"
    });
  }

  onChange(e) {
    this.setState({
      changeResult: "change"
    });
  }

  onInput(e) {
    this.setState({
      inputResult: "input.."
    });
  }

  onKeyUp(e) {
    this.setState({
      keyupResult: "up"
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>Click!</button>{this.state.clickResult}<br />
        <input onChange={this.onChange.bind(this)} placeholder="change" />{this.state.changeResult}<br />
        <input onInput={this.onInput.bind(this)} placeholder="input" />{this.state.inputResult}<br />
        <input onKeyUp={this.onKeyUp.bind(this)} placeholder="keyup" />{this.state.keyupResult}
      </div>
    )
  }

}

export default App;