import React, { useRef, useState } from "react";
import { Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { gravatarPath } from "../gravatar";
import MessageField from "./MessageField";

const useStyles = makeStyles({
  root: {
    gridRow: 1 / 2,
    margin: "26px",
  },
});

const MessageInputField = ({ name }) => {
  const [text, setText] = useState("");
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid xs={10}>
          <MessageField setText={setText} text={text} />
        </Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
