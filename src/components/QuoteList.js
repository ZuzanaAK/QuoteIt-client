import React from 'react'
import {Link} from 'react-router-dom'
import "../components/scss/main.scss"

function QuoteList(props) {
    return (
        
        <div className="QuoteContainer">
            
           {
               props.quotes.map((quote) => {
                    return <Link className="QuoteLink" key={quote._id} to={`/quote/${quote._id}`}>
                        <div className="Card"><p key={quote._id} >{quote.quote}</p></div>
                        </Link>
               })
           }

        </div>
    )
}


export default QuoteList