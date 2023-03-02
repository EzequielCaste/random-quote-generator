import { useEffect, useState } from 'react'
import QuoteFooter from '../../components/QuoteFooter'
import QuoteHero from '../../components/QuoteHero'

const Main = () => {
  const [quote, setQuote] = useState({
    text: "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.",
    author: "Bill Gates"
  })

  useEffect(() => {
    const getQuote = async () => {
      const response = await fetch('https://api.quotable.io/random')
      const data = await response.json()
      console.log(data)
    }
    //getQuote()
  }, [])
  return (
    <>
      <QuoteHero text={quote.text} />
      <QuoteFooter author={quote.author} />
    </>
  )
}

export default Main