import React, { Component } from 'react'
import axios from 'axios' 
import { Link, Redirect } from 'react-router-dom'

class QuoteDetail extends Component {

    state ={
        quote: {}
    }

    componentDidMount() {
       let quoteId = this.props.match.params.quoteId
       console.log(this.props)

        axios.get(`${process.env.REACT_APP_API_URL}/quotes/${quoteId}` )
            .then((response) => {
                this.setState({
                    quote: response.data
                })
                console.log("THIS IS AXIOS FOR QUOTE ID")
            })
    }


    render() {
        const {quote, author, _id, category} = this.state.quote
        const {loggedInUser} = this.props

        return (
            <div>
                <div>Quote: {quote}</div>
                <div>Author: {author}</div>
                <div>Category: {category}</div>
                {/* <img src={image} alt={quote}/> */}
                {/* {
                    loggedInUser ? (
                    <div>
                        <Link to={`/quote/${_id}/edit`} ><button>Edit</button></Link>
                        <button onClick={() => { this.props.onDelete(_id) } }>Delete</button>
                    </div>) : (
                    null
                    )
                } */}
                
            </div>
        )
    }
}



export default QuoteDetail