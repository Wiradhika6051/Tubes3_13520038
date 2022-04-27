import { React, useState } from "react";
import { TextField } from "@mui/material";
import List from "../component/List.js";
import styles from './Pencarian.module.css'

function Pencarian() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className={styles.main}>
        <h1>Pencarian</h1>
        <div className={styles.search}>
            <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
            />
        </div>
        <List input={inputText} />
    </div>
  );
}

export default Pencarian;