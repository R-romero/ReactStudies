import React, { Component } from "react";
import Header from "./Header/header";
import About from "./About/about";
import HandsOn from "./HandsOn/handsOn";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:  border-box;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <About />
        <HandsOn />
      </React.Fragment>
    );
  }
}

export default App;
