import React, { Component } from "react";
import { Items, Desc, Nav } from "../styled";

class CarouselSlide extends Component {
  render() {
    return (
      <Nav className={
        this.props.index === this.props.activeIndex
          ? "carousel__slide carousel__slide--active"
          : "carousel__slide"
      }>
        <Items
          onClick={() => this.handleChangeIframe(this.props.slide.fiddle1)}
        >
          <Desc>{this.props.slide.name1}</Desc>
        </Items>
        <Items
          onClick={() => this.handleChangeIframe(this.props.slide.fiddle2)}
        >
          <Desc>{this.props.slide.name2}</Desc>
        </Items>
      </Nav>
    );
  }
}

export default CarouselSlide;