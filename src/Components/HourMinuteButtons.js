/**
 * Created by William on 24.02.2017.
 */
import React from "react"

import Button from "./Button"

let styles = {
    container: {
        display: "flex",
        alignItems: "center",
        fontSize: "2em",
    },
    active: {
        color: "white",

    },
    inactive: {
        color: "#aaaaaa",
        opacity: "50%",
    }
}

const HourMinuteButtons = (props) => {
    const setStyles = (hoursActive) => (hoursActive ? {hourStyle: styles.active, minuteStyle: styles.inactive} : {hourStyle: styles.inactive, minuteStyle: styles.active})
    let {hourStyle, minuteStyle} = setStyles(props.hoursFaceActive)

    return (
        <div style={styles.container}>
            <div style={hourStyle}>
                <Button onClick={props.hourClick}>{props.activeTime.format('h')}</Button>
            </div>
            <span>:</span>
            <div style={minuteStyle}>
                <Button onClick={props.minuteClick}>{props.activeTime.format('mm')}</Button>
            </div>
        </div>
    )
}

HourMinuteButtons.propStyles = {
    activeTime: React.PropTypes.object,
    hourClick: React.PropTypes.func,
    minuteClick: React.PropTypes.func,
    hoursFaceActive: React.PropTypes.bool,
}

export default HourMinuteButtons;
