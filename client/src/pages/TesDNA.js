import styles from './TesDNA.module.css'
import React, { useState, Fragment } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

function TesDNA() {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [namaPenguna, setNamaPengguna] = useState();
    const [prediksiPenyakit, setPrediksiPenyakit] = useState();
    
    const saveFile = e => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }

    const uploadFile = async () => {
        console.log(file, "<= file");
        console.log(fileName, "<= file name");
        console.log(namaPenguna, "<= name");
        console.log(prediksiPenyakit, "<= prediksi penyakit");

        const formData = new FormData();
        formData.append("file", file)
        formData.append("fileName", fileName)
        formData.append("namaPengguna", namaPenguna);
        formData.append("prediksiPenyakit", prediksiPenyakit);

        if ( namaPenguna === undefined ) {
            swal({
                title: "Failed!",
                text: "Nama Pengguna Harus diisi",
                icon: "error",
                button: "OK"
            })
        }
        else if ( file === undefined ){
            swal({
                title: "Failed!",
                text: "Tidak ada file yang diupload",
                icon: "error",
                button: "OK"
            })
        }
        else if ( prediksiPenyakit === undefined ) {
            swal({
                title: "Failed!",
                text: "Prediksi Penyakit Harus diisi",
                icon: "error",
                button: "OK"
            })
        }
        else {
            try {
                const res = await axios.post("http://localhost:5000/upload", formData)
                console.log(res, '<= res')
                swal({
                    title: "Success!",
                    text: "Telah berhasil melakukan tes DNA",
                    icon: "success",
                    button: "OK"
                })
            } catch (error) {
                console.log(error, "<= error catch upload file")
                swal({
                    title: "Failed!",
                    text: "Tidak berhasil melakukan tes DNA",
                    icon: "error",
                    button: "OK"
                })
            }
        }
    }

    return (
        <Fragment>
            <div className = {styles.menu}>
                <h1 className= {styles.judul}>Tes DNA</h1>
                <form>
                    <div className = {styles.masukkan}>
                        <div className = {styles.masukkanKiri}>
                            <div className={styles.masukkanKiriBawah}>
                                <input 
                                    type="text" 
                                    id="inputNamaPengguna" 
                                    onChange={event => {
                                        const { value } = event.target;
                                        setNamaPengguna(value);
                                }} />
                                <span></span>
                                <label>Nama Pengguna</label>
                            </div>
                        </div>

                        <div className= {styles.masukkanTengah}>
                            <div className={styles.masukkanTengahAtas}>
                                <p>Sequence DNA:</p>
                            </div>
                            <div className={styles.masukkanTengahBawah}>
                                <div className={styles.uploadBtn}>
                                    <button className={styles.btn}>Upload a file</button>
                                    <input 
                                        type="file" 
                                        id="file"
                                        onChange={saveFile}
                                        />
                                </div>
                            </div>
                        </div>

                        <div className = {styles.masukkanKanan}>
                            <div className={styles.masukkanKananBawah}>
                                <input 
                                    type="text"
                                    id="inputPrediksiPenyakit"
                                    onChange={event => {
                                        const { value } = event.target;
                                        setPrediksiPenyakit(value);
                                    }} />
                                <span></span>
                                <label>Prediksi Penyakit</label>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={styles.bawah}>
                    <button onClick={uploadFile} className={styles.submit}>Submit</button>
                </div>
                <div className={styles.batas}></div>
                <h2> Hasil Tes </h2>
                <div className={styles.hasil}>
                    <span id="tanggal"></span> - <span id="pengguna"></span> - <span id="penyakit"></span> - <span id="True/False"></span>
                </div>
            </div>
        </Fragment>
    )
}

export default TesDNA;