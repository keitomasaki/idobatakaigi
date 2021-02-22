import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ name, setText, text }) => {
  console.log({ text });
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name: "ハムさん", text });
        setText("");
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
