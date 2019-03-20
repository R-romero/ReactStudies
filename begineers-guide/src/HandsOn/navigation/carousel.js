import React, { Component } from "react";
import { Header, Nav } from "../styled";
import Slide from "./slide";
import UpArrow from "./upArrow";
import DownArrow from "./downArrow";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

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
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

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
          {this.props.slides.map((slide, index) => (
            <Slide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
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
