import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Welcome to My React App"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              React Assignment 5 made by Muhammad Yousuf, student at Saylani Mass IT Training Program Batch #5 (18215)
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button> */}
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;