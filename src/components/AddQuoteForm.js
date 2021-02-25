import React from 'react'
import { Link, Redirect } from 'react-router-dom'


function AddQuoteForm(props) {

    return (
        <div>
        {
            props.loggedInUser ? (
        
            <form onSubmit={props.onAdd} >
                <input name="quote" type="text" placeholder="Enter quote"></input>
                <input name="author" type="text" placeholder="Enter author"></input>
                
                {/* <select>
                    <option name="category" type="text" value="article">article</option>
                    <option name="category" type="text" value="book">book</option>
                    <option name="category" type="text" value="movie">movie</option>
                    <option name="category" type="text" value="person">person</option>
                    <option name="category" type="text" value="other">other</option>
                </select> */}
                
                <input name="category" type="text" placeholder="article/book/movie/person/other"></input> 

                <input type="file" name="image" />
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