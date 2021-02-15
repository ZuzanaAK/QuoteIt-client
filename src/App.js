import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import {Switch , Route} from 'react-router-dom'
import MyNav from './components/MyNav'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'


class App extends Component {

  //hadle SignIn and SignUp here

  render() {
    return(
      <div>
        <MyNav/>
        <Switch>
          <Route path="/sign-in" render={(routeProps) => {
            return <SignIn onSignIn={this.handleSignIn} {...routeProps} />
          }}/>
          <Route path="/sign-up" render={(routeProps) => {
            return <SignUp onSignUp={this.handleSignUp} {...routeProps} />
          }}/>
        </Switch>
      </div>

    )
  }
}

export default (App)
