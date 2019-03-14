import React, { Component } from "react";
import {
  StyledHeader,
  StyledSvg,
  StyledSpan,
  StyledTitle,
  StyledSubtitle,
  StyledWrap
} from "./styled";

class Header extends Component {
  render() {
    return (
      <StyledWrap>
        <StyledHeader>
          <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.1 457">
            <g fill="#61DAFB">
              <path
                class="st0"
                d="M501.8,227.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9V9c-27.5,0-63.5,19.6-99.9,53.6c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6V9.5c-8.4,0-16,1.8-22.6,5.6c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6c28.1-16.2,34.4-66.7,19.9-130.1C461.3,290.7,501.8,259.9,501.8,227.5L501.8,227.5z M371.6,160.8c-3.7,12.9-8.3,26.2-13.5,39.5c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C344.8,155,358.5,157.6,371.6,160.8L371.6,160.8z M325.8,267.3c-7.8,13.5-15.8,26.3-24.1,38.2c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C340.2,240.8,333.3,254.2,325.8,267.3L325.8,267.3z M358.1,254.3c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C349.7,270.4,354,262.3,358.1,254.3L358.1,254.3z M256.7,361c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C275.2,340.7,265.9,351.4,256.7,361zM182.3,302.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24S177.4,294.5,182.3,302.1z M256.2,94c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C237.7,114.3,247,103.6,256.2,94z M182.2,152.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C154.1,157.7,167.9,155,182.2,152.9L182.2,152.9zM91.7,278.1c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9c-9.2,20.8-16.6,41.1-22.2,60.6C109.8,285.2,100.4,281.8,91.7,278.1L91.7,278.1z M145.5,421c-13.6-7.8-19.5-37.5-14.9-75.7c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9C152.3,423.6,148.5,422.7,145.5,421L145.5,421z M382.7,344.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C379.8,325.8,381.6,335.5,382.7,344.8z M421.2,278.1c-8.6,3.7-18,7-27.7,10.1c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6C479.5,243.2,456.6,263.1,421.2,278.1L421.2,278.1z"
              />
              <circle class="st0" cx="256.4" cy="227.5" r="45.7" />
              <path class="st0" d="M356,9.1" />
            </g>
          </StyledSvg>
          <StyledSpan>
            <StyledTitle>
              Beginners Guide
              <br /> to React
            </StyledTitle>
            <StyledSubtitle href='http://egghead.io' target='_blank'>Egghead.io</StyledSubtitle>
          </StyledSpan>
        </StyledHeader>
      </StyledWrap>
    );
  }
}

export default Header;