import React from 'react'
import styles from './CounterOutput.module.css'

export default function CounterOutput(props) {
    return (
        <div className={styles.CounterOutput} >
            Current value: {props.value}
        </div>
    )
}
