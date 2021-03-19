
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../history';
import { logout } from '../Store/actions/Auth';
export default function (ComposedComponent){
  class Authenticate extends React.Component {
      componentDidMount(){

          

          if(!this.props.isAuthenticated){
              history.push('/login');
          }
          var token = localStorage.getItem("token");
          if(token==null || typeof(token) == "undefined"){
              this.props.logout();
          }


      }

      componentDidUpdate(nextProps){
          if(!nextProps.isAuthenticated){
              history.push('/login');
          }

      }
      

      render() { 
          console.log(this.props.isAuthenticated);
          return (
              <ComposedComponent {...this.props} />
          );
      }
  }

  Authenticate.propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
  }

  function mapStateToProps(state) {
      return{
          isAuthenticated: state.auth.token!==null
      }
  }
  
  return connect(mapStateToProps,  {logout} )(Authenticate);
}