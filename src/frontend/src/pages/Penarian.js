import { React, useState } from "react";
import { TextField } from "@mui/material";
import styles from './Pencarian.module.css'
import axios from 'axios';
import swal from 'sweetalert';

function Pencarian() {
  const [inputText, setInputText] = useState();

  const search = async () => {
    console.log(inputText, "<= Search");
    const formData = new FormData();
    formData.append("inputText", inputText);

    if ( inputText === undefined ) {
        swal({
            title: "Failed!",
            text: "Pencarian Harus diisi",
            icon: "error",
            button: "OK"
        })
    }
    else {
        try {
            const res = await axios.post("http://localhost:5000/search", formData)
            console.log(res, '<= res')
            swal({
                title: "Success!",
                text: "Telah berhasil melakukan pencarian",
                icon: "success",
                button: "OK"
            })
        } catch (error) {
            console.log(error, "<= error catch search")
            swal({
                title: "Failed!",
                text: "Tidak berhasil melakukan pencarian",
                icon: "error",
                button: "OK"
            })
        }
    }
}

  return (
    <div className={styles.main}>
        <h1>Pencarian</h1>
        <form>
          <div className={styles.search}>
              <TextField
                  id="outlined-basic"
                  onChange={event => {
                    const {value} = event.target;
                    setInputText(value);
                  }}
                  variant="outlined"
                  fullWidth
              />
          </div>
        </form>
        <div className={styles.bawah}>
          <button onClick={search} className={styles.submit}>Search</button>
      </div>
    </div>
  );
}

export default Pencarian;
