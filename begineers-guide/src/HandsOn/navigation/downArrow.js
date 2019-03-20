import React, { Component } from "react";
import { Items, Desc } from "../styled";

class CarouselUpArrow extends Component {
  render() {
    return (
      <Items>
        <Desc
          className="carousel__arrow carousel__arrow--down"
          onClick={this.props.onClick}
        >
          {" "}
          ↓{" "}
        </Desc>
      </Items>
    );
  }
}

export default CarouselUpArrow;
