import React from 'react'
import styled from 'styled-components'
import Header from "../Header"
import QuoteHero from '../../components/QuoteHero'
import {useFetch} from '../../hooks/useFetch'
import Footer from '../Footer'

interface Props {
  author: string
}

const Title = styled.h2`
font-weight: 700;
font-size: 36px;
line-height: 42px;
color: #333333;
margin-left: auto;
margin-right: auto;
margin-top: 48px;
`

const List: React.FC<Props> = ({author}) => {
  const {data, loading, error} = useFetch(
    `https://quotable.io/quotes?author=${author.toLowerCase()}`
  )

  if (loading) return <h1>Loading...</h1>

  if (error) console.log(error)

  if (!data) return null

  if (Array.isArray(data)) {
    return (
      <>
        <Header />
        {<Title>{author}</Title>}
        {data.splice(0, 2).map((quote) => (
          <QuoteHero list key={quote._id} text={quote.content} />
        ))}
        <Footer />
      </>
    )
  } else {
    return null
  }
}

export default List
