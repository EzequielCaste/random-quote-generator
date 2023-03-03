import React from 'react'
import styled from 'styled-components'
import QuoteHero from '../../components/QuoteHero'
import {useFetch} from '../../hooks/useFetch'

interface Props {
  author: string
}

const Container = styled.div``

const List: React.FC<Props> = ({author}) => {
  const {data, loading, error} = useFetch(
    `https://quotable.io/quotes?author=${author.toLowerCase()}`
  )

  if (loading) return <h1>Loading...</h1>

  if (error) console.log(error)

  if (!data) return null

  if (Array.isArray(data)) {
    return (
      <Container>
        {data.splice(0, 2).map((quote) => (
          <QuoteHero key={quote._id} text={quote.content} />
        ))}
      </Container>
    )
  } else {
    return null
  }
}

export default List
