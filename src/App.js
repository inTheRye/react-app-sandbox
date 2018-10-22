import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import PropTypes from 'prop-types';
import Index from './pages/index';
import Home from './pages/home';
import EarthView from './pages/earthView'
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
      <div className="full">
          <MenuAppBar />
          <Route exact path='/' component={Index} />
          <Route path='/home' component={Home} />
          <Route path='/earthview' component={EarthView} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
