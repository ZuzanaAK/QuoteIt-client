import React from 'react'
import {Link} from 'react-router-dom'

function QuoteList(props) {
    return (
        
        <div>
            
           {
               props.quotes.map((quote) => {
                    return <Link key={quote._id} to={`/quote/${quote._id}`}>
                        <p key={quote._id} >{quote.quote}</p>
                        </Link>
               })
           }

        </div>
    )
}


export default QuoteList