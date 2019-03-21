import styled from 'styled-components'


export const Wrap = styled.div `
  width: 100%;
  background-color: #b5c2b7;
`
export const Container = styled.div `
  display: flex;
  background-color: rgba(0,0,0, 0.2);
  align-items: center;
  justify-content: flex-end;
  height: 2.5rem;
  width: 100%;
`

export const Contact = styled.p `
     margin: 10px;
`
export const Link = styled.a `
    display: flex;
    flex-basis: 2;
    justify-content: space-between;
`

export const Icon = styled.svg `
    width: 25px;
    height: 25px;
    margin-right: 10px;
    &:hover{
      fill: #FFF;
    }
`