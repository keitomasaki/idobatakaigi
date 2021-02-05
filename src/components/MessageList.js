import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    gridRow: 2 / 3,
  },
});

const MessageList = () => {
  const classes = useStyles();
  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
