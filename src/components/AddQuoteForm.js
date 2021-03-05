import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import "../components/scss/main.scss"


function AddQuoteForm(props) {

    return (
        <div>
        {
            props.loggedInUser ? (
        
            <form onSubmit={props.onAdd} >
                <input name="quote" type="text" placeholder="Enter quote"></input>
                <input name="author" type="text" placeholder="Enter author"></input>
                <input name="category" type="text" placeholder="Type details of the quote origin. Is it a book? Article? Movie? A famous person or a member of your family/friends? :)"></input> 
                <button type="submit">Submit</button>
            </form>
            ) : (
                <div>
                    <p>You need to sign in first to add a quote!</p>
                    <Link to="/sign-in">Sign In</Link>
                    <Link to="/sign-up">Sign Up</Link> 
                </div>      
            )
        }
        </div>
    )
}

export default AddQuoteForm