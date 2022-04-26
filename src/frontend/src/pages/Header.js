import styles from './Header.module.css'
import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className = {styles.title}>
                    <div className = {styles.content}>
                        DNA Pattern Matching
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;