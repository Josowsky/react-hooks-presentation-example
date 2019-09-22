import React, { Component } from "react";

class ExampleClass extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    const { counter } = this.state;

    document.title = `You clicked ${counter} times`;
  }

  componentDidUpdate() {
    const { counter } = this.state;

    document.title = `You clicked ${counter} times`;
  }

  handleButtonClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <main>
        <div>
          <button onClick={this.handleButtonClick}>Click me ({counter})</button>
        </div>
      </main>
    );
  }
}

export default ExampleClass;
