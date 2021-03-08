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
        <div className="SignInContainer">
          <div className="SignInMessage">
            <h5>Please, sign in first</h5>  
            <Link className="Link" to="/sign-in">Sign In</Link>
            <Link className="Link" to="/sign-up">Sign Up</Link> 
          </div>
        </div> );
      }
  
      return (
        <div className="Profile">
            <h3>Welcome To Your Profile {loggedInUser.username} </h3>
            <Link to="/add-quote"><button className="SubmitButton">ADD QUOTE</button></Link>
            <div>
              {this.state.quotes.map((elem, i) => {
                return (
                  <div className="QuoteDetailContainer" key={i}>
                       <p>{elem.quote}</p>
                       <p><span className="SpanDetails">author:</span> {elem.author}</p>
                       <p><span className="SpanDetails">details:</span> {elem.category}</p>
                       <Link to={`/quote/${elem._id}/edit`} ><button className="EditDeleteButton">EDIT</button></Link>
                        <button className="EditDeleteButton" onClick={() => { this.props.onDelete(elem._id) } }>DELETE</button>
                  </div>
                )
              })}
            </div>          
        </div>
      )
    }
  }