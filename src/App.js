import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import PropTypes from 'prop-types';
import Index from './pages/index';
import Home from './pages/home';
import { Route } from 'react-router-dom';
import MenuAppBar from './components/MenuAppBar'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class App extends React.Component {

  render () {
    return (
      <div>
          <MenuAppBar />
          <Route exact path='/' component={Index} />
          <Route path='/home' component={Home} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
