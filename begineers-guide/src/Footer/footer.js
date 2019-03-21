import React, { Component } from "react";
import { Wrap, Icon, Container, Link, Contact } from "./styled";

class Footer extends Component {
  render() {
    return (
      <Wrap>
        <Container>
          <Contact>Contact</Contact>
          <Link href="https://github.com/R-romero" target="_blank">
            <Icon viewBox="0 0 512 512">
              <path
                d="m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.0781252.425781-21.273438 
              2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 
              43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 
              2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 
              18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 
              21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 
              36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 
              64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 
              27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 
              196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0"
              />
            </Icon>
          </Link>
          <Link href="https://www.linkedin.com/in/romero-r/" target="_blank">
            <Icon viewBox="0 0 512 512">
              <path
                d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 
            75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 
            406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 
            13.460938-30 30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 
            40.691406.042969 75 36.546875 75 79.6875zm0 0"
              />
            </Icon>
          </Link>
          <Link href="https://codestats.net/users/r.romero" target="_blank">
            <Icon viewBox="0 0 512 512">
              <path
                d="M397.5,0h-282C52.3,0,0.5,51.8,0.5,115v282c0,63.3,51.8,115,115,115h282c63.3,0,115-51.8,115-115V115
                C512.5,51.8,460.8,0,397.5,0z M404.6,313.3c0.1,14-10.9,24.6-25.5,24.6c-14.5,0-25.9-10.9-25.7-24.5c0.2-13.2,11.7-24,25.6-23.9
                C393.2,289.5,404.5,300.1,404.6,313.3z M404.6,195.9c-0.4,13.3-12,23.6-26,23.4c-13.9-0.3-25.3-11.3-25.1-24.4
                c0.2-13.7,11.9-24.5,26.1-24.2C393.9,171,405,182.2,404.6,195.9z M408.5,465.7c-0.1,2.2-3.7,5.4-6.4,6.3
                c-30.1,10-61.4,13.2-93.1,13.5c-43.9,0.5-86.6-5.1-126.8-23.1c-57.1-25.6-92.4-68.5-107.4-125.9C59.6,277.7,60.7,218.9,84.2,162
                C115.8,85.5,176.5,42.9,261,30c42.9-6.5,85.5-3.8,127.4,7.4c16,4.3,16,4.4,16,19.8c0,10.3-0.1,20.5-0.1,30.8c0,0.4-0.4,0.9-0.5,1.2
                c-17.3-3.7-34.3-8-51.7-10.8c-42-6.8-83.3-4.8-123,11.2c-49.2,19.9-79.5,56-94.4,103.7c-13.3,42.7-13.4,86.4-1.6,129.4
                c16.6,60.3,58,96.9,122.3,109.9c49.1,9.9,97.3,5.2,145.1-7.6c2.1-0.6,4.2-1.1,6.4-1.6c0.1,0,0.2,0,0.3,0.1c1,0.4,1.5,1.2,1.5,2
                C408.8,438.7,409.1,452.2,408.5,465.7z M265.3,289.5c14.2,0,25.3,10.9,25.1,24.9c-0.1,13.5-11.1,23.6-25.5,23.5
                c-14.6-0.1-25.4-10.7-25.2-24.7C239.9,299.8,250.9,289.5,265.3,289.5z M266.5,170.7c15.5,0.7,26.6,13.8,23.4,30
                c-1.5,7.9-9.9,16.1-18.1,17.8c-16.2,3.5-29.7-6-31.8-19.9C237.7,183.1,250,170,266.5,170.7z"
              />
            </Icon>
          </Link>
          <Link href="https://steamcommunity.com/id/Lockiel" target="_blank">
            <Icon viewBox="0 0 512 512">
              <path
                d="M151.961,418.005c13.572,0,26.893-6.567,34.986-18.708c12.867-19.301,7.651-45.377-11.649-58.244l-33.037-22.022
          c5.654-1.54,11.597-2.38,17.739-2.38c37.196,0,67.348,30.152,67.348,67.351s-30.153,67.349-67.349,67.349
          c-36.202,0-65.722-28.564-67.274-64.387l35.977,23.984C135.863,415.721,143.955,418.005,151.961,418.005z M426.67,0
          C473.607,0,512,38.406,512,85.344v341.314C512,473.626,473.607,512,426.67,512H85.344C38.406,512,0,473.625,0,426.659V325.145
          l60.667,40.444c-5.826,31.587,3.469,65.415,27.899,89.845c39.452,39.452,103.415,39.452,142.868,0
          c24.234-24.231,33.575-57.715,28.039-89.082L384,254.858v-0.001c23.123-3.319,45.408-13.872,63.197-31.661
          c43.736-43.738,43.736-114.653,0-158.392c-43.74-43.739-114.654-43.739-158.393,0c-17.789,17.789-28.344,40.073-31.662,63.196l0,0
          L154.796,283.115c-15.924,0.816-31.689,5.382-45.863,13.695L0,224.189V85.344C0,38.406,38.405,0,85.343,0H426.67z M448,144
          c0-44.183-35.816-80-80-80s-80,35.817-80,80s35.816,80,80,80S448,188.183,448,144z M320,144c0-26.51,21.49-48,48-48s48,21.49,48,48
          s-21.49,48-48,48S320,170.51,320,144z"
              />
            </Icon>
          </Link>
          <Link href="https://anilist.co/user/Lockiel/" target="_blank">
            <Icon viewBox="0 0 512 512">
              <path
                d="M0-26.2v587.8h16.9c10.2-33.7,51.4-170,58.9-194.3c27-88.5,54.3-177,81-265.6c2.6-8.7,6-11.2,13.6-11
            c19.7,0.6,39.4,0.6,59.1,0c7.7-0.2,11.9,2,13.8,11c1.7,8.2,4.8,16.1,7.5,24.9c1.3-1.7,2.1-2.2,2.1-2.8
            c1.2-30.2,2.7-31.9,29.4-31.9c9.5,0,19-0.1,28.4,0c14.2,0.3,19.1,6.1,19.1,23.6c0.1,73.6,0,147.1,0.1,220.7
            c0,19.1,0,19.1,16.7,19.1c30.3,0,60.7-0.1,91,0c16.2,0.1,21.2,5.7,21.3,24c0.1,13.9,0.2,27.9,0,41.8
            c-0.2,15.9-5.7,22.4-19.3,22.5c-55.7,0.4-111.5,0.6-167.2,1.2c-6.9,0.1-10.2-2.3-12.1-10c-3.4-13.8-8.2-27.1-11.6-40.9
            c-1.8-7.5-4.5-10.6-11.7-10.4c-24.6,0.5-49.3,0.5-73.9,0c-6.4-0.1-9.4,2-11.3,9.2c-3.8,14.5-8.3,28.9-13.1,43
            c-1.1,3.2-31.7,105.8-39.6,125.8H512V-26.2H0z M174.1,304.4c8.5-32.1,16.6-62.6,25.6-96.5c9.9,33.8,19,64.7,28.4,96.5C209.8,304.4,193,304.4,174.1,304.4z"
              />
            </Icon>
          </Link>
        </Container>
      </Wrap>
    );
  }
}

export default Footer;
