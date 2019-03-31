import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  colorSwitchBase: {
    color: orange[300],
    '&$colorChecked': {
      color: orange[600],
      '& + $colorBar': {
        backgroundColor: orange[500],
      },
    },
  },
  colorBar: {},
  colorChecked: {},
});

class SliderSwitch extends React.Component {
    constructor(props) {
        super(props);
    }
  state = {
    checkedA: false,
    checkedB: true,
  };

  handleChange = name => event => {
      this.setState({ [name]: event.target.checked });
      this.props.toggle();
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
              classes={{
                switchBase: classes.colorSwitchBase,
                checked: classes.colorChecked,
                bar: classes.colorBar,
              }}
            />
          }
          label="Mixer"
        />
    </FormGroup>
    );
  }
}

SliderSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderSwitch);
