import React, { Component } from 'react'
import axios from 'axios' 
import { Link, Redirect } from 'react-router-dom'

class QuoteDetail extends Component {

    // this.props.onDelete = fnc

    state ={
        quote: {}
    }

    componentDidMount() {
       let quoteId = this.props.match.params.quoteId
       console.log(this.props)
    //    this.props.history.push('/manish.com')
        axios.get(`http://localhost:5000/api/quotes/${quoteId}`)
            .then((response) => {
                this.setState({
                    quote: response.data
                })
            })
    }


    render() {
        const {quote, author, _id, category, image} = this.state.quote
        const {loggedInUser} = this.props

        if (!loggedInUser) {
           return <Redirect to={"/sign-in"}/>
        }

        return (
            <div>
                <div>Name: {quote}</div>
                <div>Author: {author}</div>
                <div>Category: {category}</div>
                <img src={image} alt={quote}/>
                <Link to={`/quote/${_id}/edit`} ><button>Edit</button></Link>
                <button onClick={() => { this.props.onDelete(_id) } }>Delete</button>
            </div>
        )
    }
}



export default QuoteDetail