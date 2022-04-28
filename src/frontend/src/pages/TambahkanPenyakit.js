import styles from './TambahkanPenyakit.module.css'
import React, { Fragment,useState } from 'react'
import axios from 'axios';

class TambahkanPenyakit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          selectedFile: null
        };
        this.submitForm = this.submitForm.bind(this)
      }
      submitForm() {
        const formData = new FormData();
        formData.append("name", this.state.name);
        formData.append("file", this.state.selectedFile);
        console.log("aman cuk")
        console.log(formData.get("name"))
        console.log(formData.get("file"))
        axios
          .post('http://localhost:8080/api/addpenyakit', formData)
          .then((res) => {
            
            alert("File Upload success dan:"+res);
          })
          .catch((err) =>{alert("File Upload Error"+err);console.log(err)});
      };
    render() {
        return (
            <Fragment>
                <div className = {styles.menu}>
                    <h1 className= {styles.judul}>Tambahkan Penyakit</h1>
                    <div className = {styles.masukkan}>
                        <div className = {styles.masukkanKiri}>
                            <form>
                                <div className={styles.masukkanKiriBawah}>
                                    <input type="text" id="inputPenyakit" name="inputPenyakit" onChange={(e) => this.setState({name:e.target.value})}
                                     required></input>
                                    <span></span>
                                    <label>Nama Penyakit</label>
                                </div>
                            </form>
                        </div>

                        <div className= {styles.masukkanKanan}>
                            <form>
                                <div className={styles.masukkanKananAtas}>
                                    <p>Sequence DNA:</p>
                                </div>
                                <div className={styles.masukkanKananBawah}>
                                    <div className={styles.uploadBtn}>
                                        <button className={styles.btn}>Upload a file</button>
                                        <input type="file" name="myfile" onChange={(e) => this.setState({selectedFile:e.target.files[0]})}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={styles.bawah}>
                        <button onClick={this.submitForm} className={styles.submit}>Submit</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default TambahkanPenyakit;