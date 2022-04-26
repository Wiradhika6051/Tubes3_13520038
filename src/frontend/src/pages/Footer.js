import styles from './Footer.module.css'
import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.backMenu}>
                <button onClick='' className={styles.menu}>Menu</button>
            </div>
        )
    }
}

export default Footer;