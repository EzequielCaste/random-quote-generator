import QuoteFooter from '../../components/QuoteFooter'
import QuoteHero from '../../components/QuoteHero'
import {IData, IDataAuthor} from '../../hooks/useFetch'
import styled from 'styled-components'

const LoadingText = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  height: inherit;
  color: #333333;
  display: grid;
  place-items: center;
`

interface Props {
  quote: IData | IDataAuthor | IData[] | undefined
  loading: boolean
}

const Main: React.FC<Props> = ({quote, loading}) => {
  if (loading) return <LoadingText>Loading...</LoadingText>

  if (quote === undefined) return <></>

  if (quote?.hasOwnProperty('count')) {
    const {results: quotesArray} = quote as IDataAuthor

    const renderQuotes = quotesArray
      .slice(0, 3)
      .map((quote) => <QuoteHero key={quote._id} list text={quote.content} />)
    return (
      <>
        {renderQuotes}
        <QuoteFooter author={quotesArray[0].author} />
      </>
    )
  }

  const {author, content}: IData = quote as IData

  return (
    <>
      <QuoteHero text={content} />
      <QuoteFooter author={author} />
    </>
  )
}

export default Main
