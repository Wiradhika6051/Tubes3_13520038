import styles from './TambahkanPenyakit.module.css'
import React, { Fragment } from 'react'

class TambahkanPenyakit extends React.Component {
    render() {
        return (
            <Fragment>
                <div className = {styles.menu}>
                    <h1 className= {styles.judul}>Tambahkan Penyakit</h1>
                    <div className = {styles.masukkan}>
                        <div className = {styles.masukkanKiri}>
                            <form>
                                <div className={styles.masukkanKiriBawah}>
                                    <input type="text" id="inputPenyakit" name="inputPenyakit" required></input>
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
                                        <input type="file" name="myfile"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={styles.bawah}>
                        <button onClick='' className={styles.submit}>Submit</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default TambahkanPenyakit;