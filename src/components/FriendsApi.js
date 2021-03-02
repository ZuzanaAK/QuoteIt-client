import React, { Component } from 'react'
import axios from 'axios' 

class FriendsApi extends Component {


    state ={
        randomQuote: {},

    }

    componentDidMount() {
    
        axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
        .then(
          (response) => {
            console.log('response.data is: ', response.data);
    
            this.setState({
                randomQuote: response.data,
            });
          }
        );
      }

    render() {

        const {quote, character} = this.state.randomQuote

        return (
            <div>
                <p>{quote} - {character}</p><button>next</button>
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