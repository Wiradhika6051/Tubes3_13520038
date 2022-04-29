import styles from './TesDNA.module.css'
import React, { Fragment } from 'react'

class TesDNA extends React.Component {
    render() {
        return (
            <Fragment>
                <div className = {styles.menu}>
                    <h1 className= {styles.judul}>Tes DNA</h1>
                    <div className = {styles.masukkan}>
                        <div className = {styles.masukkanKiri}>
                            <form>
                                <div className={styles.masukkanKiriBawah}>
                                    <input type="text" id="inputPenyakit" name="inputNamaPengguna" required></input>
                                    <span></span>
                                    <label>Nama Pengguna</label>
                                </div>
                            </form>
                        </div>

                        <div className= {styles.masukkanTengah}>
                            <form>
                                <div className={styles.masukkanTengahAtas}>
                                    <p>Sequence DNA:</p>
                                </div>
                                <div className={styles.masukkanTengahBawah}>
                                    <div className={styles.uploadBtn}>
                                        <button className={styles.btn}>Upload a file</button>
                                        <input type="file" name="myfile"/>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className = {styles.masukkanKanan}>
                            <form>
                                <div className={styles.masukkanKananBawah}>
                                    <input type="text" id="inputPenyakit" name="inputPrediksiPenyakit" required></input>
                                    <span></span>
                                    <label>Prediksi Penyakit</label>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className={styles.bawah}>
                        <button onClick='' className={styles.submit}>Submit</button>
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
}

export default TesDNA;