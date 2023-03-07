import QuoteFooter from '../../components/QuoteFooter'
import QuoteHero from '../../components/QuoteHero'
import {IData} from '../../hooks/useFetch'
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
  quote: IData
  loading: boolean
}

const Main: React.FC<Props> = ({ quote, loading }) => {

  if (loading) return <LoadingText>Loading...</LoadingText>

  const { author, content }: IData = quote as IData 

  return (
    <>
      <QuoteHero text={content} />
      <QuoteFooter author={author} />
    </>
  )
}

export default Main
