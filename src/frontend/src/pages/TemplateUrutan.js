import styles from './TemplateUrutan.module.css'
import React, { Fragment } from 'react'

const TemplateUrutan = (props) => {
    return (
        <Fragment>
            <div className = {styles.postBox}>
                <div>{props.nomor}. {props.waktu} - {props.nama} - {props.penyakit} - {props.stat}</div>
            </div>
        </Fragment>
    )
}

export default TemplateUrutan;