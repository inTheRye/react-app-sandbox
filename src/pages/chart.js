import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import GanttChart from '../components/GanttChart'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
  },
});

class Chart extends React.Component {

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h2>Chart</h2>
        <GanttChart />
      </div>
    );
  }
}

Chart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Chart));