import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../components/scss/main.scss";

class AddQuoteForm extends React.Component {

  render() {
    return (
      <div className="AddQuoteForm">
        {this.props.loggedInUser ? (
          <form className="FormContainer" onSubmit={this.props.onAdd}>
          
            <h4>YOUR QUOTE</h4><textarea rows="15" cols="45" className="FormField" name="quote" type="text" placeholder="Type your quote here." required>"..."</textarea>
            <h4>AUTHOR</h4><textarea rows="5" cols="45" className="FormField" name="author" type="text" placeholder="Type the author of the quote here." required></textarea>
            <h4>DETAILS/THOUGHTS</h4><textarea rows="13" cols="45" className="FormField" name="category" type="text"
              placeholder="Type details of the quote origin. Is it a quote from a book? An article? A Movie? A famous person or a member of your family/friends? - you can write more about them here :)"
            ></textarea>
            
              <button className="SubmitButton" type="submit"><p>SUBMIT</p></button>
            
          </form>
        ) : (
          
            <div className="SignInMessage">
              <p>Please sign in first to add a quote.</p>
              <Link className="Link" to="/sign-in">Sign In</Link>
              <p>If you don't have an account yet, please sign up.</p>
              <Link className="Link" to="/sign-up">Sign Up</Link>
            </div>
          
        )}
      </div>
    );
  }
}

export default AddQuoteForm;
