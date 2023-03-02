import React from 'react'

import styled from 'styled-components'

const QuoteText = styled.p`
font-weight: 500;
font-size: 36px;
line-height: 120%;
color: #000000;
width: 614px;
display: flex;
margin-left: 99px;
`

const Container = styled.div`
  margin-top: 225px;
  display: flex;
  justify-content: center;
  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 301px;
    background: #F7DF94;
  }
`
interface Props {
  text: string
}
const QuoteHero: React.FC<Props> = ({ text }) => {  
  return (
    <Container>
      <QuoteText>
        “{text}”
      </QuoteText>      
    </Container>
  )
}

export default QuoteHero