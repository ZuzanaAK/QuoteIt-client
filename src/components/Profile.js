import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Profile extends Component {
    state = {
      profile: null, 
      quotes: [],
      quote: {},
    };
  
    componentDidMount() {

      // let quoteId = this.props.match.params.quoteId
      // const { loggedInUser } = this.props;
      // console.log("THIS IS LOGGED IN USER IN PROFILE", loggedInUser.loggedInUser)

    
      //to get loggedin user's quotes
      axios
        .get(`${process.env.REACT_APP_API_URL}/user-quotes`, { withCredentials: true })
        .then((quotes) => {
          console.log("PROFILE quotes are: ", quotes.data);
          // console.log("PROFILE loggedInUser._id is", loggedInUser._id);
  
          this.setState({
            quotes: quotes.data,
          })
        })
  }
  
    render() {
      const { loggedInUser, quotes } = this.props;
      //const {quote, author, _id, category} = this.state.quote
  
      if (!loggedInUser) {
        return (
        <div>
          <p>Please, sign in first</p>  
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link> 
        </div> );
      }
  
      return (
        <div>
            <h2>Welcome {loggedInUser.username} </h2>
            <div>
            These are your quotes:
              {this.state.quotes.map((elem, i) => {
                return (
                  <div key={i}>
                       <p>quote: {elem.quote}</p>
                       <p>author: {elem.author}</p>
                       <p>category: {elem.category}</p>
                       <Link to={`/quote/${elem._id}/edit`} ><button>Edit</button></Link>
                        <button onClick={() => { this.props.onDelete(elem._id) } }>Delete</button>
                  </div>
                )
              })}
            </div>          
        </div>
      )
    }
  }