import styled from 'styled-components'
import { device } from '../queries'

export const StyledWrap = styled.div`
display:flex;
justify-content: flex-end;
background-color: ${({bgColor}) => bgColor || "#6D326D"};

@media ${device.tablet} {
  justify-content:center;
}
`

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-end;
  margin-top: 20px;
  color: #FFF;
  width: 90%;

  @media ${device.tablet} {
    justify-content: center;
  }
`
export const StyledSvg = styled.svg`
  display:none;
  height:90%;
  max-width: 400px;
  flex: 0.9;
  align-self:center;

  @media ${device.mobileL} {
    display: block;
  }
`

export const StyledSpan = styled.span`
  padding-right: 1rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: right;
  align-self: right;
`

export const StyledTitle = styled.div`
  font-family: 'Javanese Text';
  font-size: 2em;
  line-height: 1.2em;
  @media ${device.tablet} {
    font-size: 3em;
  }
  @media ${device.laptopL} {
    font-size: 5em;
  }
`

export const StyledSubtitle = styled.a`
  font-family: 'Microsoft Yi Baiti';
  color: #FFF;
  text-decoration: underline dotted;
  font-size: 1.2em;
  margin-bottom: 5px;

  @media ${device.tablet} {
    font-size: 2em;
  }
  @media ${device.laptopL} {
    font-size: 2.5em;
  }
`