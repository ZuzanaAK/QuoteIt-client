import React, { Component } from 'react'
import axios from 'axios' 
import "../components/scss/main.scss"

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
       cloneQuote.quote =  e.target.value
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
        // const {quote, author, category} = this.state.quote

        return (
            <div className="EditForm">

                <div className="EditContainer">           
                    <h4>YOUR QUOTE</h4>
                    <textarea onChange={this.handleQuoteChange} rows="10" cols="45" type="text" value={this.state.quote.quote}></textarea>
                    <br/>
                    <h4>AUTHOR</h4>
                    <textarea onChange={this.handleAuthorChange} rows="5" cols="45" type="text" value={this.state.quote.author} ></textarea>
                    <br/>
                    <h4>DETAILS/THOUGHTS</h4>
                    <textarea onChange={this.handleCategoryChange} rows="15" cols="45" type="text" placeholder="Type details of the quote origin. Is it a quote from a book? An article? A Movie? A famous person or a member of your family/friends? - you can write more about them here :)" value={this.state.quote.category} ></textarea>
                    <br/>
                    <button className="SubmitButton" onClick={() => { this.props.onEdit(this.state.quote) }}>SUBMIT CHANGES</button>
                </div> 
            </div>
        )
    }
}

export default EditForm