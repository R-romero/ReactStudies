import React, { Component } from "react";
import {
  Wrap,
  Container,
  Title,
  Link,
  Pic,
  Name,
  Description
} from './styled'

class About extends Component {
  render() {
    return (
      <Wrap>
        <Container>
          <Title>About</Title>
          <Link>
            <Pic href='#'></Pic>
            <Name>Kent C. Dodds</Name>
          </Link>
        </Container>

        <Container>
          <Description>
            React got that name for a reason. It’s a component-based JavaScript
            library that renders smartly and can seriously simplify your work.
            <br />
            This course is for React newbies and anyone looking to build a solid
            foundation. It’s designed to teach you everything you need to start
            building web applications in React right away.
          </Description>
        </Container>
      </Wrap>
    );
  }
}
