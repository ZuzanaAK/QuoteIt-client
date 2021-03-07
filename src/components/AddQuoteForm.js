import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../components/scss/main.scss";

class AddQuoteForm extends React.Component {

  render() {
    return (
      <div className="AddQuoteForm">
        {this.props.loggedInUser ? (
          <form className="FormContainer" onSubmit={this.props.onAdd}>
            <p>Your Quote</p><textarea rows="15" cols="45" className="FormField" name="quote" type="text" placeholder="Type your quote here, you don't need to use double quotes."></textarea>
            <p>Author</p><textarea rows="5" cols="45" className="FormField" name="author" type="text" placeholder="Type the author of the quote here."></textarea>
            <p>Source/Details</p><textarea rows="13" cols="45" className="FormField" name="category" type="text"
              placeholder="Type details of the quote origin. Is it a quote from a book? An article? A Movie? A famous person or a member of your family/friends? - you can write more about them here :)"
            ></textarea>
            <button className="SubmitButton" type="submit"><p>SUBMIT</p></button>
          </form>
        ) : (
          <div>
            <p>You need to sign in first to add a quote!</p>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        )}
      </div>
    );
  }
}

export default AddQuoteForm;
