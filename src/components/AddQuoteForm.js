import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../components/scss/main.scss";

class AddQuoteForm extends React.Component {

  render() {
    return (
      <div>
        {this.props.loggedInUser ? (
          <form onSubmit={this.props.onAdd}>
            <input name="quote" type="text" placeholder="Type your quote here, you don't need to use double quotes."></input>
            <input name="author" type="text" placeholder="Type the author of the quote here."></input>
            <input
              name="category"
              type="text"
              placeholder="Type details of the quote origin. Is it a book? Article? Movie? A famous person or a member of your family/friends? :)"
            ></input>
            <button type="submit">Submit</button>
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
