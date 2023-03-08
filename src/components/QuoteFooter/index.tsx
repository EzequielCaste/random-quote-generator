import React from 'react'
import {Link} from 'wouter'
import Container from './Container'
import Author from './Author'

interface Props {
  author?: string
}

const QuoteFooter: React.FC<Props> = ({author}) => {
  return (
    <Link href={`/list/${author}`}>
      <Container>
        <Author>
          {author}
          <span>business</span>
        </Author>
        ⏩
      </Container>
    </Link>
  )
}

export default QuoteFooter
