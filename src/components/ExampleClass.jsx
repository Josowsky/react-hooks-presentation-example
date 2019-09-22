import React, { Component } from "react";

import { StyledRow, StyledButton } from "./Example.styles";

class ExampleClass extends Component {
  state = {
    counter: 0,
    width: window.innerWidth
  };

  componentDidMount() {
    const { counter } = this.state;

    document.title = `You clicked ${counter} times`;
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentDidUpdate() {
    const { counter } = this.state;

    document.title = `You clicked ${counter} times`;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  handleButtonClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    const { counter, width } = this.state;

    return (
      <main>
        <StyledRow>
          <StyledButton onClick={this.handleButtonClick}>
            Click me ({counter})
          </StyledButton>
        </StyledRow>
        <StyledRow>Width: {width}</StyledRow>
      </main>
    );
  }
}

export default ExampleClass;
