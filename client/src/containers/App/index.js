import React, { Component } from 'react';
import {connect} from 'react-redux';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import LogIn from '../../components/LogIn';
import Book from '../../containers/Book';
import ProtectedRoute from '../ProtectedRoute';

import { checkIsLogined } from '../../actions';

class App extends Component {

  componentDidMount() {
    this.props.checkIsLogined();
  }

  render() {
    const {isLogined} = this.props;

    return (

      <Router>
        <Switch>
          <Route path='/login' render={({location}) => 
            isLogined ? 
              <Redirect to={{pathname: '/', state: { from: location }}} /> : 
              <LogIn />
          }/>
          <ProtectedRoute path='/' isLogined={isLogined} exact>
            <Book />
          </ProtectedRoute>
        </Switch>
      </Router>
 
    )
  }
}

const mapStateToProps = ({ authReducer: { isLogined } }) => ({
  isLogined
});

const mapDispatchToProps = {
  checkIsLogined
}

export default connect(mapStateToProps, mapDispatchToProps)(App);