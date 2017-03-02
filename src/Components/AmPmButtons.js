/**
 * Created by William on 23.02.2017.
 */
import React from "react"

import Button from "./Button"

let styles = {
    container: {
        display: "flex",
        flexDirection: "column",
    },
    active: {
        color: "white",
    },
    inactive: {
        color: "#aaaaaa",
        opacity: "50%",
    }
}

const AmPmButton = (props) => {
    const setStyles = (amActive) => (amActive ? {amStyle: styles.active, pmStyle: styles.inactive} : {amStyle: styles.inactive, pmStyle: styles.active})
    let {amStyle, pmStyle} = setStyles(props.amActive)
    return (
        <div style={styles.container}>
            <div style={amStyle}>
                <Button onClick={props.amClick}>AM</Button>
            </div>
            <div style={pmStyle}>
                <Button onClick={props.pmClick}>PM</Button>
            </div>
        </div>
    )
}

AmPmButton.propStyles = {
    amClick: React.PropTypes.func,
    pmClick: React.PropTypes.func,
    amActive: React.PropTypes.bool,
}

export default AmPmButton;