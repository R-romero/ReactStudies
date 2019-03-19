import React, { Component } from "react";
import {
  Wrap,
  Fiddle,
  Title,
  Header,
  Nav,
  Content,
  Items,
  Desc,
  Scroll
} from "./styled";

class HandsOn extends Component {

  state = {
    iframeUrl: '//jsfiddle.net/Moltenbrain/9chnv6k3/1/embedded/html,result/dark/',
  }

  handleChangeIframe (url) {
    this.setState({
      iframeUrl: url
    })
  }

  render() {
    return (
      <Wrap>
        <Title>HandsOn</Title>
        <Content>
          <Header>
            <Nav>
              <Items onClick={() => this.handleChangeIframe("//jsfiddle.net/Moltenbrain/9chnv6k3/1/embedded/html,result/dark/")}>
                <Desc>Create Element</Desc>
              </Items>
              <Items onClick={() => this.handleChangeIframe("//jsfiddle.net/Moltenbrain/vbenf3ar/embedded/html,result/dark/")}>
                <Desc>Jsx Calls</Desc>
              </Items>
            </Nav>
            <Scroll>
              <Items>
                <Desc> ↑ </Desc>
              </Items>
              <Items>
                <Desc> ↓ </Desc>
              </Items>
            </Scroll>
          </Header>
          <Fiddle
            src= {this.state.iframeUrl}
            allowFullScreen="allowfullscreen"
            frameBorder="0"
            title="JsFiddle"
          />
        </Content>
      </Wrap>
    );
  }
}

export default HandsOn;
