import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Five(props) {
  const UpperCase = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    // setText("You have clicked on UpperCase")
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  function LowerCase() {
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    // setText("You have clicked on LowerCase")
    setText(newText);
  }
  function ClearText() {
    console.log("Clear Text was clicked" + text);
    // setText("You have clicked on ClearText")
    setText("");
  }

  const [text, setText] = useState("Enter Text here2");

  return (
    <>
      <div>
        <h2>TextArea</h2>
        <h3>{props.heading}</h3>
      </div>
      <div>
        <TextareaAutosize
          value={text}
          maxRows={10}
          aria-label="empty textarea"
          style={{ width: "100%" }}
          onChange={handleOnChange}
          rows="4"
        />
      </div>
      <div>
        <Stack spacing={10} direction="row">
          <Button variant="contained" value={text} onClick={UpperCase}>
            UpperCase
          </Button>
          <Button variant="contained" value={text} onClick={LowerCase}>
            LowerCase
          </Button>
          <Button variant="contained" value={text} onClick={ClearText}>
            ClearText
          </Button>
        </Stack>
      </div>

      <div>
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
