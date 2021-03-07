import React, { Component } from 'react'
import axios from 'axios' 
import "../components/scss/main.scss"

class FriendsApi extends Component {


    state ={
        friendsQuote: {},
    }

    componentDidMount() {
    
        axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
        .then(
          (response) => {
            console.log('response.data is: ', response.data);
    
            this.setState({
                friendsQuote: response.data,
            });
          }
        );
      }



    render() {

        const {quote, character} = this.state.friendsQuote

        return (
        <div className="FriendApi">
                <div className="FriendsQuote">
                    <p>"{quote}"<br/> - {character} <span>#FriendsForever</span></p>
                </div>
        </div>
        )
    }
}


export default FriendsApi