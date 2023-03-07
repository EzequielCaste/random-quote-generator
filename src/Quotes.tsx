import {useEffect, useRef, useState} from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'



const Quotes: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [quote, setQuote] = useState({
    author: '',
    content: '',
  })

  const shouldFetch = useRef(true)

  function getQuotes() {
    if (shouldFetch.current) {
      setLoading(true)
      shouldFetch.current = false
      fetch('https://api.quotable.io/random')
        .then((resp) => resp.json())
        .then((data) => {
          setQuote({
            author: data.author,
            content: data.content,
          })
          setLoading(false)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  useEffect(() => {
    getQuotes()
  }, [])

  function handleRandom() {
    shouldFetch.current = true;
    setLoading(true);
    getQuotes();
  }

  return (
    <>
      <Header handleClick={handleRandom} />
      
      <Main quote={quote} loading={loading} />
      
      <Footer />
    </>
  )
}

export default Quotes
