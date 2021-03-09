import logo from './logo.svg';
import "./components/scss/main.scss"
import React, { Component } from 'react'
import axios from 'axios'
import {Switch , Route, withRouter} from 'react-router-dom'
import MyNav from './components/MyNav'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import AddQuoteForm from './components/AddQuoteForm'
import EditForm from './components/EditForm'
import QuoteList from './components/QuoteList'
import QuoteDetail from './components/QuoteDetail'
import Profile from './components/Profile'
import FriendsApi from './components/FriendsApi'

class App extends Component {

  state = {
    loggedInUser: null,
    quotes: [],
    profile: null,
  }

  componentDidMount() {
    //this is to make sure that user will stay logged in after the page refreshes
    if (!this.state.loggedInUser) {
      axios.get(`${process.env.REACT_APP_API_URL}/user`, {withCredentials: true})
        .then((response) => {
            this.setState({
              loggedInUser: response.data
            })
            console.log(response.data)
        })
    }

    axios.get(`${process.env.REACT_APP_API_URL}/quotes`)
    .then((response) => {
       console.log(response.data) 
      this.setState({
        quotes: response.data
      })
    })

    if (!this.state.profile) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user-quotes`, { withCredentials: true })
        .then((response) => {
          console.log("APP resp is : ", response);
          this.setState({
            profile: response.data,
          })
        })
    }
   }



  handleSignUp = (e) => {
    e.preventDefault()
    const {username, email, password} = e.target

    axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
      username: username.value,
      email: email.value,
      password: password.value,
    }, {withCredentials: true})
    .then((response) => {
      this.setState({
        loggedInUser: response.data
      }, () => {
        this.props.history.push("/")
      })
    })
    .catch((error) => {
      console.log(error.response)
      this.setState({
        errorMessage: error.response.data.errorMessage
      })
    })
  }

  handleSignIn = (e) => {
    e.preventDefault()
    e.preventDefault()
    const {email, password} = e.target

    axios.post(`${process.env.REACT_APP_API_URL}/signin`, {
      email: email.value,
      password: password.value,
    }, {withCredentials: true})
    .then((response) => {
      this.setState({
        loggedInUser: response.data
      }, () => {
        this.props.history.push("/")
      })
    })
    .catch((err)=>{
        console.log(err.response.data.error)
        this.setState({
          errorMessage: err.response.data.error
        })
    })
  }

  handleLogOut = (e) => {
    axios.post(`${process.env.REACT_APP_API_URL}/logout`, {}, {withCredentials: true})
      .then(() => {
          this.setState({
            loggedInUser: null
          })
      })
  }

  handleAdd = (e) => {
    e.preventDefault()
    const {quote, author, category} = e.target
    
      let newQuote = {
        quote: quote.value,
        author: author.value,
        category: category.value,
      }

      axios.post('http://localhost:5000/api/create', newQuote, {withCredentials: true}, {
        })
      .then((response) =>{
          this.setState({
            quotes: [ response.data , ...this.state.quotes]
          }, () => {
            this.props.history.push('/user-quotes')
          })      
      })     
  }

  handleEdit = (quote) => {
    console.log("I AM IN THE EDIT")
    axios.patch(`${process.env.REACT_APP_API_URL}/quotes/${quote._id}`, {
      quote: quote.quote,
      author: quote.author,
      category: quote.category,
    }, {withCredentials: true})
    .then(() => {
        let updatedQuotes = this.state.quotes.map((myQuote) => {
          if (myQuote._id == quote._id) {
            myQuote = quote
          }
          return myQuote
        })

        this.setState({
          quotes: updatedQuotes
        }, () => {
          this.props.history.push('/')
        })
    })
  }

  handleDelete = (quoteId) => {
    console.log("I AM IN THE DELETE", quoteId)
    axios.delete(`${process.env.REACT_APP_API_URL}/quotes/${quoteId}`, {}, {withCredentials: true})
      .then(() => {
        console.log("WE ARE INSIDE DELETE THEN BLOCK")
          let filteredQuotes = this.state.quotes.filter((quote) => {
              return quote._id !== quoteId
          })

          this.setState({
            quotes: filteredQuotes
          }, () => {
            this.props.history.push('/user-quotes')
          })
      })
      .catch((err)=> console.log(err))

  }



  render() {

    const {loggedInUser} = this.state

    return(
      <div>
        <MyNav loggedInUser={loggedInUser} onLogout={this.handleLogOut} />
        <div className="FriendsApiContainer">
          <FriendsApi />
        </div>
        <Switch>
          <Route path="/sign-in" render={(routeProps) => {
            return <SignIn onSignIn={this.handleSignIn} {...routeProps} />
          }}/>
          <Route path="/sign-up" render={(routeProps) => {
            return <SignUp onSignUp={this.handleSignUp} {...routeProps} />
          }}/>
          <Route exact path="/" render={() => {
              return <QuoteList quotes={this.state.quotes} friendsQuotes={this.state.friendsQuotes}/>
          }} />
          <Route exact path="/quote/:quoteId" render={(routeProps) => {
              return <QuoteDetail {...routeProps} />
          }} />
          <Route path="/add-quote" render={() => {
              return <AddQuoteForm loggedInUser={loggedInUser} onAdd={this.handleAdd} />
          }} />
          <Route path="/quote/:quoteId/edit" render={(routeProps) => {
              return <EditForm onEdit={this.handleEdit} {...routeProps} />
          }} />
          <Route exact path="/user-quotes" render={(routeProps) => {
          return <Profile quotes={this.state.quotes} onDelete={this.handleDelete} onEdit={this.handleEdit} loggedInUser={loggedInUser} {...routeProps}/>
          }}/>
          
        </Switch> 
      </div>
      )
    }
  }


  export default withRouter(App)
