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
  
      //fetch loggedin user information displayed on profile
      if (!this.state.profile) {
        axios
          .get(`${process.env.REACT_APP_API_URL}/profile`, { withCredentials: true })
          .then((resp) => {
            console.log("resp is : ", resp);
            console.log("loggedInUser is: ", loggedInUser);
            this.setState({
              profile: resp.data,
            });
          })
      }
  
      //to get loggedin user's quotes
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/user-quotes`, { withCredentials: true })
        .then((quotes) => {
          console.log("quotes are: ", quotes.data);
          console.log("loggedInUser._id is", loggedInUser._id);
  
          this.setState({
            quotes: quotes.data,
          })
        })
    }
  
    render() {
      const { loggedInUser, username } = this.props;
      // const {username} = this.state.profile
  
      if (!loggedInUser) {
        return <Redirect to={"/sign-in"} />;
      }
  
    //   if (!this.state.profile) {
    //     return <h3>Loading...</h3>;
    //   }
  
      return (
        <div>

            <h2>Welcome {this.state.profile.username}</h2>
            <div>
            {this.state.profile.quotes}
            </div>


                  
        </div>
      );
    }
  }