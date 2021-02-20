import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import {Switch , Route, withRouter} from 'react-router-dom'
import MyNav from './components/MyNav'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import AddQuoteForm from './components/AddQuoteForm'
import EditForm from './components/EditForm'

class App extends Component {

  state = {
    loggedInUser: null,
    quotes: []
  }

  componentDidMount() {
    if (!this.state.loggedInUser) {
      axios.get('http://localhost:5000/api/user', {withCredentials: true})
        .then((response) => {
            this.setState({
              loggedInUser: response.data
            })
        })
    }

    axios.get('http://localhost:5000/api/quotes')
    .then((response) => {
      console.log(response.data) 
      this.setState({
        quotes: response.data
      })
    })
   }

  handleSignUp = (e) => {
    e.preventDefault()
    const {username, email, password} = e.target

    axios.post("http://localhost:5000/api/signup", {
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
  }

  handleSignIn = (e) => {
    e.preventDefault()
    const {email, password} = e.target

    axios.post("http://localhost:5000/api/signin", {
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
    axios.post('http://localhost:5000/api/logout', {}, {withCredentials: true})
      .then(() => {
          this.setState({
            loggedInUser: null
          })
      })
  }

  handleAdd = (e) => {
    e.preventDefault()
    const {quote, author, category, image} = e.target
    let imageFile = image.files[0]

    let uploadForm = new FormData()
    uploadForm.append('imageUrl', imageFile)

    axios.post('http://localhost:5000/api/upload', uploadForm)
      .then((response) => {

          let newQuote = {
            quote: quote.value,
            author: author.value,
            category: category.value,
            image: response.data.image
          }
      
          axios.post('http://localhost:5000/api/create', newQuote)
          .then((response) =>{
              this.setState({
                quotes: [ response.data , ...this.state.quotes]
              }, () => {
                this.props.history.push('/')
              })      
          })
      })
  }

  render() {

    const {loggedInUser} = this.state

    return(
      <div>
        <MyNav loggedInUser={loggedInUser} onLogout={this.handleLogOut} />
        {
          loggedInUser ? (<h5 style={{color: '#255ed6'}} >Hey there, {loggedInUser.username}!</h5>) : null
        }
        <Switch>
          <Route path="/sign-in" render={(routeProps) => {
            return <SignIn onSignIn={this.handleSignIn} {...routeProps} />
          }}/>
          <Route path="/sign-up" render={(routeProps) => {
            return <SignUp onSignUp={this.handleSignUp} {...routeProps} />
          }}/>
          {/* <Route exact path="/" /> */}
          <Route path="/add-quote" render={() => {
              return <AddQuoteForm onAdd={this.handleAdd} />
          }} />
          <Route path="/quote/:quoteId/edit" render={(routeProps) => {
              return <EditForm onEdit={this.handleEdit} {...routeProps} />
          }} />  
          
        </Switch> 
      </div>
      )
    }
  }


  export default withRouter(App)
