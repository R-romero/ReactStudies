import styled from 'styled-components'
import { device } from '../queries'

export const Wrap = styled.div `
  background-color: #E5F4E3;
  min-height:240px;
  padding-bottom: 20px;
  display: flex;

  @media ${device.laptopL}{
    height: 300px;
  }
`

export const Container = styled.div `
 padding-right: 10px;
 flex-basis: ${({basis}) => basis ? basis: '60%'};
`

export const Title = styled.div `
  font-family: 'Javanese Text';
  padding-left: 5px;
  font-size: 2em;
  max-height: 50px;
  font-style: bold;

  @media ${device.tablet} {
    padding-left: 15px;
    font-size: 2.5em;
  }

  @media ${device.laptopL} {
    font-size: 3em;
  }
`

export const Link = styled.a `
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 30% 0;
  width: 60%;
  user-select: text;
  color: #000;
  margin-left: 20px;
  margin-top: 10%;

  @media ${device.tablet} {
    margin-top: 5%;
    margin-left: 20%;
  }

  @media ${device.laptopL} {
    flex-direction: row;
    font-size: 1.8em;
    &:hover {
      transition: 0.3s;
      background-color: rgba(255,255,255 , .5);
    }
  }
`

export const Pic = styled.img `
  background-color: #FFF;
  width: 60%;
  max-width: 150px;
  align-self: center;
  border-radius: 50%;
`

export const Name = styled.div `
  text-align: center;
  @media ${device.laptopL} {
    padding-left: 5px;
    align-self: center;
  }
`

export const Description = styled.p `
  padding-top: 10%;
  font-size: 0.8em;
  line-height: 1.5em;
  br {
    line-height: 2em;

    @media ${device.laptopL} {
      line-height: 2.5em;
    }
  }

  @media ${device.tablet} {
    font-size: 1em;
    padding-top: 7%;
  }
  @media ${device.laptopL} {
    line-height: 1.8em;
    padding-top: 3%;
    font-size: 1.2em;
  }
`
