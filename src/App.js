import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import Home from './components/Home'
import Login from './components/Login'
import OAuth from './components/OAuth'

class App extends Component {
  render() {
    return (
      <div className="App">
            <RaisedButton
                href="https://github.com/callemall/material-ui"
                target="_blank"
                label="Login"
                primary={true}
                icon={<FontIcon className="muidocs-icon-custom-twitter" />}
            />
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/oauth" component={OAuth} />
                </div>
            </Router>
      </div>
    );
  }
}

export default App
