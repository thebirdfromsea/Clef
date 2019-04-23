import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const styles = {
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
};


class EnergySlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: .5
        }

    }

    handleChange = (event, value) => {
        this.setState({ value });

    };

    handleDragEnd = (event) => {
        this.props.inputenergy(this.state.value)

    };


    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                <Typography id="label">Energy</Typography>
                <Slider
                    classes={{ container: classes.slider }}
                    value={value}
                    aria-labelledby="label"
                    onChange={this.handleChange}
                    onDragEnd={this.handleDragEnd}
                    min={0}
                    max={1} />
            </div>
        );
    }
}

EnergySlider.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnergySlider);
