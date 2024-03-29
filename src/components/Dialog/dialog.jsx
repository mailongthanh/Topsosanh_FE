import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "./dialog.scss";

function FormDialog(props) {
  props.handleClose();
  const handleClose = () => {
    props.handleClose(false);
  };
  return (
    <div className="dialog">
      <Dialog open={props.check} onClose={props.handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose(false)}>Cancel</Button>
          <Button onClick={() => {}}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
