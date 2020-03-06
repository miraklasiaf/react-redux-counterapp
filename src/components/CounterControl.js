import React from 'react'
import styles from './CounterControl.module.css'

export default function CounterControl(props) {
    return (
        <div className={styles.CounterControl} onClick={props.clicked}>
            {props.label}
        </div>
    )
}
