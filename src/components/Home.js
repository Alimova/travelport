import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import API from '../services/twitter-api'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            hasAuth: API.hasAuth(),
            isLoading: false,
            error: null,
            data: [],
        };
    }

    renderHome() {

    }

    render() {
        return this.state.hasAuth ? (
            this.renderHome()
        ) : (
            <Redirect to="/login" />
        );
    }
}

export default Home
