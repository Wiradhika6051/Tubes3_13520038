import styles from './Menu.module.css'
import React, { Fragment } from 'react'

class Menu extends React.Component {
    render() {
        return (
            <Fragment>
                <div className = {styles.menu}>
                    <h1 className= {styles.judul}>Menu</h1>
                    <div className={styles.opsi}>
                        <button onClick='' className={styles.klik}>Tambahkan Penyakit</button>
                    </div>
                    <div className={styles.opsi}>
                        <button onClick='' className={styles.klik}>Tes DNA</button>
                    </div>
                    <div className={styles.opsi}>
                        <button onClick='' className={styles.klik}>Pencarian</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Menu;