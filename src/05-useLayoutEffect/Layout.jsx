import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";
import { useCounter, useFetch } from "../hooks";




export const Layout = () => {

    const {counter, increment} = useCounter(1)

    const {data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    //console.log({data, isLoading, hasError})
    const { author, quote } = !!data && data[0];

    
    

  return (
    <>
    
        <h1>BreakingBad Quotes</h1>
        
        <hr/>

        {
            (isLoading)
                ? <LoadingQuote/>
                
                : <Quote author={author} quote={quote}/>
                
        }

        <button 
            className="btn btn-primary" 
            onClick={() => increment()}
            disabled= {isLoading}
            >
            Next Quote
        </button>
        

        

        


    
    </>
  )
}
