import styled from 'styled-components';

const Container = styled.div<{showTitle: boolean}>`
  display: flex;
  justify-content: center;

  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    background: #F7DF94;
  }
  
  ${props => props.showTitle 
    ? 
    ` margin-top: 65px;        
      &:before {
      height: auto; 
      }
    ` 
    : 'margin-top: 95px;'}  

  @media all and (min-width: 600px) {
    ${props => props.showTitle 
    ? 
    `margin-top: 140px;
    &:before {
     height: auto; 
    }` 
    : 'margin-top: 125px;'}  
  }
  @media all and (min-width: 900px) {
    ${props => props.showTitle 
      ? 
      `margin-top: 60px;
      &:before {
       height: auto; 
      }` 
      : 'margin-top: 65px;'}  
  }
  @media all and (min-width: 1440px) {
    ${props => props.showTitle 
      ? 
      `margin-top: 140px;
      &:before {
       height: auto; 
      }` 
      : 'margin-top: 225px;'}  
  }
`

export default Container;