import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField, Select, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 400
  }
}));

function AddAccountModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
   <Button variant="contained" color="secondary" onClick={handleOpen} xs={12}>
        Add Key
      </Button>
      <Modal
        aria-labelledby="add-account-modal-title"
        aria-describedby="add-account-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="add-account-modal-title">Add New Key</h2>
          <TextField
            label="Account Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <br />
        
          <TextField
            label="Api Key"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <br />
          <TextField
            label="Secret Key"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <br />
          <br />
          <Button variant="contained" color="secondary">
           Save
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default AddAccountModal;
