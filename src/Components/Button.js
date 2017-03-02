/**
 * Created by William on 23.02.2017.
 */
import React from "react"

let styles = {
    padding: "0px 8px 0px 8px",
    cursor: "pointer",
    boxSizing: "border-box",
}

const Button = (props) => (
    <span style={styles} onClick={props.onClick}>
        {props.children}
    </span>
)

Button.propTypes = {
    onClick: React.PropTypes.func,
}

export default Button;