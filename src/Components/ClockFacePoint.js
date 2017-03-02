/**
 * Created by William on 26.02.2017.
 */
import React from "react"
import {POINT_SIZE, CLOCK_BOX} from "../ConstValues"
import {angleToPosition} from "../utils"

export const ClockFacePoint = (props) => {
    const getStyles = (x,y) => ({
        width: POINT_SIZE+"px",
        height: POINT_SIZE+"px",
        position: "absolute",
        cursor: "pointer",
        left: x,
        top: y,
        fontSize: "1.2em",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    })
    let {x,y} = angleToPosition(props.angle)
    let minutePoints = <span style={{transform:`rotate(${-props.angle-Math.PI/2}rad)`, fontSize:"0.1em",padding:"2px",boxSizing:"border-box"}}>
                            |
                        </span>
    return (
        <div style={getStyles(x,y)}
             onClick={props.onClick}>
            {props.visible ? props.index : null}
        </div>
    )
}

ClockFacePoint.propTypes = {
    onClick: React.PropTypes.func,
    index: React.PropTypes.number,
    angle: React.PropTypes.number,
    visible: React.PropTypes.bool,
}

export default ClockFacePoint;