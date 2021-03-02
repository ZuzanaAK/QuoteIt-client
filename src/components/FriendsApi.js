import React, { Component } from 'react'
import axios from 'axios' 

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
            <div>
                <p>{quote} - {character}</p>
            </div>
        )
    }
}


// function FriendsApi(props) {
//     return (
//         <div>
//           <p>"{props.friendsQ.quote}" - {props.friendsQ.character}</p> 
//         </div>
//     )
// }


export default FriendsApi