import React, { Component } from 'react'
import axios from 'axios' 

class EditForm extends Component {

    state ={
        quote: {}
    }

    componentDidMount() {
       let quoteId = this.props.match.params.quoteId
       //console.log("quoteId:", this.props.match.params.quoteId)
        axios.get(`${process.env.REACT_APP_API_URL}/quotes/${quoteId}`, {withCredentials: true})
            .then((response) => {
                this.setState({
                    quote: response.data
                })
            })
    }

    handleQuoteChange = (e) => {
       let cloneQuote = JSON.parse(JSON.stringify(this.state.quote))
       cloneQuote.name =  e.target.value
       this.setState({
            quote: cloneQuote
       })
    }

    handleAuthorChange = (e) => {
        let cloneQuote = JSON.parse(JSON.stringify(this.state.quote))
        cloneQuote.author =  e.target.value
        this.setState({
            quote: cloneQuote
        })
    }

    handleCategoryChange = (e) => {
        let cloneQuote = JSON.parse(JSON.stringify(this.state.quote))
        cloneQuote.category =  e.target.value
        this.setState({
            quote: cloneQuote
        })
    }


    render() {
        const {quote, author, category} = this.state.quote

        return (
            <div>
                <p>quote</p>
                    <input onChange={this.handleQuoteChange} type="text" value={quote}></input>
                    <br/>
                <p>author</p>
                    <input onChange={this.handleAuthorChange} type="text" value={author} ></input>
                    <br/>
                <p>category</p>
                    <input onChange={this.handleCategoryChange} type="text" value={category} ></input>
                    <br/>
                    <button onClick={() => { this.props.onEdit(this.state.quote) }}>Submit Changes</button>
            </div>
        )
    }
}

export default EditForm