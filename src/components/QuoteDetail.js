import React, { Component } from 'react'
import axios from 'axios' 
import { Link, Redirect } from 'react-router-dom'
import "../components/scss/main.scss"

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
            <div className="QuoteDetail">
                <div className="DetailContainer">
                    <h4>QUOTE</h4><p>{quote}</p>
                    <h4>AUTHOR</h4><p> {author}</p>
                    <h4>DETAILS</h4><p> {category}</p>
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
            </div>
        )
    }
}



export default QuoteDetail