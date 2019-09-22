import React, { Component } from "react";

import { StyledRow, StyledButton } from "./Example.styles";

class ExampleClass extends Component {
  render() {
    return (
      <main>
        <StyledRow>
          <StyledButton>Click me ()</StyledButton>
        </StyledRow>
        <StyledRow>Width: </StyledRow>
      </main>
    );
  }
}

export default ExampleClass;
