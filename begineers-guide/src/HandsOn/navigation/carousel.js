import React, { Component } from "react";
import { Header, Nav } from "../styled";
import Slide from "./slide";
import UpArrow from "./upArrow";
import DownArrow from "./downArrow";
import axios from 'axios';

class Carousel extends Component {

  state = {
    activeIndex: 0,
    dataFeed: [],
  };

  componentDidMount() {
    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

      try{
        axios.get('https://api.myjson.com/bins/a7iiy').then( res => this.setState({dataFeed: res.data.data}));
      } catch (error){
        console.log(error);
      }
  }



  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    let slidesLength = this.state.dataFeed.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slidesLength = this.state.dataFeed.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <Header className="carousel">
        <Nav className="carousel__slides">
          {this.state.dataFeed.map((slide, index) => (
            <Slide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
              handleChangeIframe = {this.props.handleChangeIframe.bind(this)}
            />
          ))}
        </Nav>
        <UpArrow onClick={e => this.goToPrevSlide(e)} />
        <DownArrow onClick={e => this.goToNextSlide(e)} />
      </Header>
    );
  }
}

export default Carousel;
