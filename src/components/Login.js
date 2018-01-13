import React, { Component, Fragment } from "react"
import TWIT from "../services/twitter-api"

class Login extends Component {
    constructor() {
        super()
        this.login = this.login.bind(this)
    }

    login() {
        TWIT.login();
    }

    render() {
        return (
            <Fragment>
                <p>You are not logged in</p>
                <button onClick={this.login}>Login me!</button>
            </Fragment>
        )
    }
}

export default Login
