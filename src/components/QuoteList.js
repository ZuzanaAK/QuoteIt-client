import React from 'react'
import {Link} from 'react-router-dom'
//import '../components/QuoteList.css'


function QuoteList(props) {
    return (
        
        <div className="MainContainer">
            
           {
               props.quotes.map((quote) => {
                    return <Link key={quote._id} to={`/quote/${quote._id}`}>
                        <div className="Card"><p key={quote._id} >{quote.quote}</p></div>
                        </Link>
               })
           }

        </div>
    )
}


export default QuoteList