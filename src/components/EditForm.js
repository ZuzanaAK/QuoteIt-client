import React, { Component } from 'react'
import axios from 'axios' 

class EditForm extends Component {

    state ={
        quote: {}
    }

    componentDidMount() {
       let quoteId = this.props.match.params.quoteId
        axios.get(`http://localhost:5000/api/todos/${quoteId}`)
            .then((response) => {
                this.setState({
                    quote: response.data
                })
            })
    }

    handleQuoteChange = (e) => {
       let cloneQoute = JSON.parse(JSON.stringify(this.state.quote))
       cloneQoute.name =  e.target.value
       this.setState({
            quote: cloneQoute
       })
    }

    handleAuthorChange = (e) => {
        let cloneQoute = JSON.parse(JSON.stringify(this.state.quote))
        cloneQoute.author =  e.target.value
        this.setState({
            quote: cloneQoute
        })
    }

    handleCategoryChange = (e) => {
        let cloneQoute = JSON.parse(JSON.stringify(this.state.quote))
        cloneQoute.category =  e.target.value
        this.setState({
            quote: cloneQoute
        })
    }

    handleImageChange = (e) => {
        let cloneQoute = JSON.parse(JSON.stringify(this.state.quote))
        cloneQoute.category =  e.target.value
        this.setState({
            quote: cloneQoute
        })
    }

    render() {
        const {quote, author, category, image} = this.state.quote

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
            <p>image</p>
                <input onChange={this.handleImageChange} type="file" value={image} ></input>
                <br/>
                <button onClick={() => { this.props.onEdit(this.state.quote) }} >Edit</button>
            </div>
        )
    }
}

export default EditForm