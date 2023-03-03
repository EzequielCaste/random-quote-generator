import React from 'react'
import {Link} from 'wouter'
import styled from 'styled-components'

const Container = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #4f4f4f;
  padding: 50px 30px;
  margin: 109px auto 16px auto;
  width: 672px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #333333;
    color: #f2f2f2;
    cursor: pointer;
  }
`

const Author = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #828282;
  }
`

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
