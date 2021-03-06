import React, { Component } from "react";
import Carousel from './navigation/carousel';

import {
  Wrap,
  Fiddle,
  Title,
  Content,
} from "./styled";

class HandsOn extends Component {

  state = {
    iframeUrl: '//jsfiddle.net/Moltenbrain/9chnv6k3/embedded/html,result/dark/',
  }

  handleChangeIframe (url) {
    this.setState({
      iframeUrl: url
    })
  }

  render() {
    return (
      <Wrap>
        <Title>Classes</Title>
        <Content>
          <Carousel handleChangeIframe = {this.handleChangeIframe.bind(this)}></Carousel>
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
