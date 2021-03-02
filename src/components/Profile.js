import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class Profile extends Component {
    state = {
      profile: null,
      quotes: [],
    };
  
    componentDidMount() {
      const { loggedInUser } = this.props;
      console.log(loggedInUser)
      console.log("ZUZANA")
      //fetch loggedin user information displayed on profile
      if (!this.state.profile) {
  
      //to get loggedin user's quotes
      axios
        .get(`${process.env.REACT_APP_API_URL}/user-quotes`, { withCredentials: true })
        .then((quotes) => {
          console.log("PROFILE quotes are: ", quotes.data);
          console.log("PROFILE loggedInUser._id is", loggedInUser._id);
  
          this.setState({
            quotes: quotes.data,
          })
        })
    }
  }
  
    render() {
      const { loggedInUser, quotes } = this.props;
      // const {username} = this.state.profile
  
      if (!loggedInUser) {
        return <Redirect to={"/sign-in"} />;
      }
  
    //   if (!this.state.profile) {
    //     return <h3>Loading...</h3>;
    //   }
  
      return (
        <div>
          {/* {this.state.profile.username} */}
            <h2>Welcome {loggedInUser.username} </h2>
            <div>
            these are your quotes
              {this.state.quotes.map((elem, i) => {
                return (
                  <div key={i}>
                       <p>{elem.quote}</p>
                      
                  </div>
                )
              })}
            </div>          
        </div>
      );
    }
  }