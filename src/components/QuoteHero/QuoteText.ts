import styled from 'styled-components';

const QuoteText = styled.p`
font-weight: 500;
font-size: 22px;
width: 80%;
line-height: 120%;
color: #000000;
display: flex;
margin-left: 8px;

@media all and (min-width: 600px) {
  width: 614px;
  margin-left: 60px;
  font-size: 28px;
}
@media all and (min-width: 900px) {
  margin-left: 99px;
  font-size: 36px;
}
`
export default QuoteText