import styles from './TambahkanPenyakit.module.css'
import React, { useState } from 'react'
import axios from 'axios';

function TambahkanPenyakit() {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [name, setName] = useState();
    
    const saveFile = e => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
        console.log(file, "<= file");
        console.log(fileName, "<= file name");
        console.log(name, "<= name");
    }

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append("file", file)
        formData.append("fileName", fileName)
        formData.append("name", name);

        try {
            const res = await axios.post("http://localhost:5000/upload", formData)
            console.log(res, '<= res')
        } catch (error) {
            console.log(error, "<= error catch upload file")
        }
    }

    /*
    const send = event => {
        const data = new FormData();
        data.append('name', name);
        data.append('file', file);
        
        axios.post('http://localhost:3000/upload', data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    */


    return (
            <div className = {styles.menu}>
                <h1 className= {styles.judul}>Tambahkan Penyakit</h1>
                <form>
                    <div className = {styles.masukkan}>
                        <div className = {styles.masukkanKiri}>
                            <div className={styles.masukkanKiriBawah}>
                                <input
                                required
                                type='text'
                                id='name' 
                                onChange={event => {
                                const { value } = event.target;
                                setName(value);
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
                                    /*onChange={event => {
                                    const file = event.target.files[0];
                                    setFile(file); 
                                    }}*/ 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={styles.bawah}>
                    <button 
                    /*onClick={send}*/
                    onClick={uploadFile} 
                    className={styles.submit}
                    >Submit</button>
                </div>
            </div>
    )
}

export default TambahkanPenyakit;