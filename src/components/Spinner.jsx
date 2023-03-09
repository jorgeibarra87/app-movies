import React from 'react'
import styles from "../pages/Spinner.module.css"
import { ImSpinner9 } from 'react-icons/im'

export default function Spinner() {
    return (
        <div className={styles.spinner}>
            <ImSpinner9 className={styles.spinning} size={70} />
        </div>

    )
}
