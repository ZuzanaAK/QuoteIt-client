import React from 'react'
import {Link} from 'react-router-dom'

function QuoteList(props) {
    return (
        <div>
        In quote list  
           {
               props.quotes.map((quote) => {
                    return <Link to={`/quote/${quote._id}`}>
                        <p key={quote._id} >{quote.quote}</p>
                        </Link>
               })
           }
        </div>
    )
}


export default QuoteList