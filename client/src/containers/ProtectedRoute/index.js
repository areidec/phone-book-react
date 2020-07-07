import React, {Component} from 'react';
import { 
  Route,
  Redirect
} from 'react-router-dom';

class ProtectedRoute extends Component {

  render() {
    const { children, path, isLogined, exact } = this.props;
    return (
      <Route 
        exact={exact}
        path={path}
        render={({ location }) => 
        isLogined ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        ) }/>
    )
  }
}

export default ProtectedRoute;