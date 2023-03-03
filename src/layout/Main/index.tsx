import QuoteFooter from '../../components/QuoteFooter'
import QuoteHero from '../../components/QuoteHero'
import {IData, useFetch} from '../../hooks/useFetch'

const Main = () => {
  const {data, loading, error} = useFetch('https://api.quotable.io/random')

  if (loading) return <h1>Loading...</h1>

  if (error) console.log(error)

  if (!data) return null

  const { author, content }: IData = data as IData

  return (
    <>
      <QuoteHero text={content} />
      <QuoteFooter author={author} />
    </>
  )
}

export default Main
