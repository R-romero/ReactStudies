import React, { Component } from "react";
import { Items, Arrow } from "../styled";

class CarouselUpArrow extends Component {
  render() {
    return (
      <Items>
        <Arrow
          className="carousel__arrow carousel__arrow--up"
          onClick={this.props.onClick}
        >
          {" "}
          ↑{" "}
        </Arrow>
      </Items>
    );
  }
}

export default CarouselUpArrow;