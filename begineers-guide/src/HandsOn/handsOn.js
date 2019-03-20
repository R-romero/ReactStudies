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
    iframeUrl: '//jsfiddle.net/Moltenbrain/9chnv6k3/1/embedded/html,result/dark/',
  }

  handleChangeIframe (url) {
    this.setState({
      iframeUrl: url
    })
  }

  carouselNavData = [
    {
      name1: 'Create Element',
      fiddle1: '//jsfiddle.net/Moltenbrain/9chnv6k3/1/embedded/html,result/dark/',
      name2: 'JsX Calls',
      fiddle2: '//jsfiddle.net/Moltenbrain/vbenf3ar/embedded/html,result/dark/'
    },
    {
      name1: 'Teste 3',
      fiddle1: '//jsfiddle.net/Moltenbrain/vbenf3ar/embedded/html,result/dark/',
      name2: 'Teste 4',
      fiddle2: '//jsfiddle.net/Moltenbrain/vbenf3ar/embedded/html,result/dark/' 
    },
    {
      name1: 'Teste 5',
      fiddle1: '//jsfiddle.net/Moltenbrain/vbenf3ar/embedded/html,result/dark/',
      name2: 'Teste 6',
      fiddle2: '//jsfiddle.net/Moltenbrain/vbenf3ar/embedded/html,result/dark/' 
    },
  ];

  render() {
    return (
      <Wrap>
        <Title>HandsOn</Title>
        <Content>
          <Carousel slides={this.carouselNavData}></Carousel>
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
