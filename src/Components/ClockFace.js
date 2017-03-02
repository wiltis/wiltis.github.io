/**
 * Created by William on 23.02.2017.
 */
import React from "react"
import ClockFacePoint from "./ClockFacePoint"
import {HOURS, MINUTES, CLOCK_HEIGHT, CLOCK_BOX} from "../ConstValues"
import {getOrigin, drawCircle} from "../utils"

let styles = {
    height: CLOCK_HEIGHT+"px",
    width: "100%",
    //border: "1px dashed black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    position: "relative",
}

const ClockFace = (props) => {
    let {hour, minute} = props.onClickFunctions
    const hourFace = () => {
        return (
            HOURS.map((h, i) => {
                let angle = (2*Math.PI * -i / HOURS.length) + Math.PI/2
                return (
                    <ClockFacePoint
                        key={i}
                        index={i===0?12:i}
                        angle={angle}
                        visible={true}
                        onClick={()=>hour(i)}/>
                )
            })
        )
    }
    const minuteFace = () => {
        return (
            MINUTES.map((m, i) => {
                let angle = (2*Math.PI * -i / MINUTES.length) + Math.PI/2
                let visible = i % 5 === 0
                return (
                    <ClockFacePoint
                        key={i}
                        index={i}
                        angle={angle}
                        visible={visible}
                        onClick={()=>minute(i)}/>
                )
            })
        )
    }
    const activeFace = props.hoursFaceActive ? hourFace() : minuteFace()
    let r = CLOCK_BOX/2
    return (
        <div style={styles}>
            {drawCircle([r,r], r,"white")}
            {activeFace}
        </div>
    )
}

ClockFace.propTypes = {
    activeTime: React.PropTypes.object,
    onClickFunctions: React.PropTypes.object,
    hoursFaceActive: React.PropTypes.bool,
}

export default ClockFace;