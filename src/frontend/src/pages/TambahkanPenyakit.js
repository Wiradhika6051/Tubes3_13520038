import styles from './TambahkanPenyakit.module.css'
import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

function TambahkanPenyakit() {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [namaPenyakit, setNamaPenyakit] = useState();
    
    const saveFile = e => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }

    const uploadFile = async () => {
        console.log(file, "<= file");
        console.log(fileName, "<= file name");
        console.log(namaPenyakit, "<= name");

        const formData = new FormData();
        formData.append("file", file)
        formData.append("fileName", fileName)
        formData.append("namaPenyakit", namaPenyakit);

        if ( namaPenyakit === undefined ) {
            swal({
                title: "Failed!",
                text: "Nama Penyakit Harus diisi",
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
        else {
            try {
                const res = await axios.post("http://localhost:5000/addPenyakit", formData)
                console.log(res, '<= res')
                swal({
                    title: "Success!",
                    text: "Telah berhasil menambahkan penyakit",
                    icon: "success",
                    button: "OK"
                })
            } catch (error) {
                console.log(error, "<= error catch upload file")
                swal({
                    title: "Failed!",
                    text: "Tidak berhasil menambahkan penyakit",
                    icon: "error",
                    button: "OK"
                })
            }
        }
    }

    return (
            <div className = {styles.menu}>
                <h1 className= {styles.judul}>Tambahkan Penyakit</h1>
                <form>
                    <div className = {styles.masukkan}>
                        <div className = {styles.masukkanKiri}>
                            <div className={styles.masukkanKiriBawah}>
                                <input
                                    type='text'
                                    id='inputNamaPenyakit' 
                                    onChange={event => {
                                        const { value } = event.target;
                                        setNamaPenyakit(value);
                                }} />
                                <span></span>
                                <label>Nama Penyakit</label>
                            </div>
                        </div>

                        <div className= {styles.masukkanKanan}>
                            <div className={styles.masukkanKananAtas}>
                                <p>Sequence DNA:</p>
                            </div>
                            <div className={styles.masukkanKananBawah}>
                                <div className={styles.uploadBtn}>
                                    <button className={styles.btn}>Upload a file</button>
                                    <input 
                                    type='file' 
                                    id='file'
                                    onChange={saveFile}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={styles.bawah}>
                    <button 
                    onClick={uploadFile} 
                    className={styles.submit}
                    >Submit</button>
                </div>
            </div>
    )
}

export default TambahkanPenyakit;