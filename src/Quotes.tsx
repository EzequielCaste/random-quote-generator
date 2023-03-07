import {useEffect, useRef, useState} from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
 import {IDataAuthor, IData} from './hooks/useFetch'

interface Props {
  author?: string
}

const Quotes: React.FC<Props> = ({ author = '' } ) => {
  let decodedAuthor;
  let url = 'https://api.quotable.io/random'

  if (author) {
    decodedAuthor = window.decodeURIComponent(author).toLowerCase()
    url = `https://quotable.io/quotes?author=${decodedAuthor}`
  }

  const [loading, setLoading] = useState(false)
  const [quote, setQuote] = useState<IDataAuthor | IData | IData[]>()

  const shouldFetch = useRef(true)

  function getQuotes() {
    if (shouldFetch.current) {
      setLoading(true)
      shouldFetch.current = false
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          if (author) {
            //console.log(data);
            setQuote(data)
          } else {
            setQuote({
              author: data.author,
              content: data.content,
            })
          }
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
