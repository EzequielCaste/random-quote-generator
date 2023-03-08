import React from 'react'
import Container from './Container'
import QuoteText from './QuoteText'

interface Props {
  text: string
  list?: boolean
}
const QuoteHero: React.FC<Props> = ({ text, list = false }) => {  
  return (
    <Container showTitle={list}>
      <QuoteText>
        “{text}”
      </QuoteText>      
    </Container>
  )
}

export default QuoteHero