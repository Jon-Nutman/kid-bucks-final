import React from 'react'
import logo from './alogo.png'
import styles from "./Logo.module.css"

export default function Logo() {
    return (
        <div>
            <img src = {logo} className={styles.logo}/>
        </div>
    )
}
