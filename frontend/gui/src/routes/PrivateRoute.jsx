
import React, { PureComponent, Fragment } from 'react';
import { Route,Redirect  } from 'react-router-dom';

function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }
  export default PrivateRoute;