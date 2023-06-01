import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import Dialog from "@mui/material/Dialog";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/post/postSlice";

function ConfirmDeletePost({ isOpen, closeDialog, id }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletePost(id)).then(() => closeDialog());
  };
  const handleExit = () => {
    closeDialog();
  };

  return (
    <Dialog
      sx={{ p: 3 }}
      open={isOpen}
      onClose={closeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Please Confirm..."}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you want to delete this post?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleDelete(id)}>CONFIRM</Button>
        <Button onClick={handleExit} autoFocus>
          CANCEL
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDeletePost;
