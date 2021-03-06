import React from 'react'
import './App.scss'
import './App.css'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'

// Import components 
import JokeContainer from './component/JokeComponent/jokeContainer'; 
import StoryContainer from './component/StoryComponent/storyContainer';
import RandomJoke from './HELLO'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        
        </main>
        {/* the route to my main Component after authorizing it to enter the app */}
        <AuthenticatedRoute user={user} path="/joke" render={() => ( <JokeContainer user={user} /> )}/>
        <AuthenticatedRoute user={user} path="/story" render={() => ( <StoryContainer user={user} /> )}/>
        <Route user={user} path="/hello" render={() => ( <RandomJoke user={user} /> )}/>
      </React.Fragment>
    )
  }
}

export default App
