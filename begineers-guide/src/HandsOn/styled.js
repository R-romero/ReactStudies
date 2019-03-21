import styled from 'styled-components'
import { device } from '../queries'

export const Wrap = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #b5c2b7;
`

export const Content = styled.div `
  width: 90%;
  align-self: center;
`

export const Title = styled.div `
  font-family: 'Cambria';
  padding-left: 5px;
  font-size: 2em;
  font-style: bold;
  padding-bottom:10px;

  @media ${device.tablet} {
    padding-left: 15px;
    font-size: 2.5em;
  }

  @media ${device.laptopL} {
    padding-bottom: 20px;
    font-size: 3em;
  }
`

export const Header = styled.div`
  display:flex;
  background-color: #1c2128;
  border: 2px solid #12151a;


`

export const Nav = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  list-style: none;

  
  .carousel__slide {
    display:none;
    grid-template-columns: repeat(2, 1fr);
  }.carousel__slide--active {
    display:grid;
  }

  /* @media ${device.laptop}{
    grid-template-columns: repeat(4, 1fr);
  } */
`

export const Items = styled.div `
  display: flex;
  flex-direction: column;
  height: 50px;
  color: #fff;
  justify-content: center;
  &:hover {
    background-color: #fff;
    color: #000;
  }
  
`

export const Scroll = styled.div `
  display: flex;
  flex-direction: column;
  height: 50px;
`

export const Desc = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Arrow = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 15px;
  text-align: center;
`

export const Fiddle = styled.iframe `
  width: 100%;
  height: 300px;
`