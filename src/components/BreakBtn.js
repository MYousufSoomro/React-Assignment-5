import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function SwitchOff(props) {
    const { classes } = props;
    return (
        <div>
            <Button onClick={props.onClick} variant="contained" color="default" className={classes.button}>
                Break
      </Button>
        </div>
    );
}

SwitchOff.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwitchOff);