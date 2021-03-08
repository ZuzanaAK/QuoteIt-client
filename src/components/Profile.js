import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/scss/main.scss"

export default class Profile extends Component {
    state = {
      profile: null, 
      quotes: [],
      quote: {},
    };
  
    componentDidMount() {
    
      //to get loggedin user's quotes
      axios
        .get(`${process.env.REACT_APP_API_URL}/user-quotes`, { withCredentials: true })
        .then((quotes) => {
          console.log("PROFILE quotes are: ", quotes.data);
  
          this.setState({
            quotes: quotes.data,
          })
        })
    }

  
    render() {
      const { loggedInUser, quotes } = this.props;
  
      if (!loggedInUser) {
        return (
        <div>
          <p>Please, sign in first</p>  
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link> 
        </div> );
      }
  
      return (
        <div className="Profile">
            <h2>Welcome To Your Profile {loggedInUser.username} </h2>
            <Link to="/add-quote"><button className="SubmitButton">Add Quote</button></Link>
            <div>
            These are your quotes:
              {this.state.quotes.map((elem, i) => {
                return (
                  <div className="QuoteDetailContainer" key={i}>
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