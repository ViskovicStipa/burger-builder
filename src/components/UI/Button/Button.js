import React from 'react'
import classes from './Button.module.css'

export default function button(props) {
    return (
        <button
            disabled = {props.disabled}
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    )
}
