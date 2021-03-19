import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../src/Store/actions/Auth';
import './App.css';
import CommonLayout from './layouts/Common';


class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }
    render() {
        return ( <Fragment >
            <CommonLayout {...this.props }/>  </Fragment >
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);