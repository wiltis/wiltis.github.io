/**
 * Created by William on 23.02.2017.
 */
import React from "react"

import AmPmButtons from "./AmPmButtons"
import HourMinuteButtons from "./HourMinuteButtons"
import {HEADER_HEIGHT} from "../ConstValues"

let styles = {
    height: HEADER_HEIGHT+"px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    color: "#f8f8f8",
    boxSizing: "border-box",
    padding: "5px 0px 0px 0px",
}

const CurrentValuesView = (props) => {
    let {hour, minute, pm, am} = props.onClickFunctions;
    return(
        <div style={styles}>
            <HourMinuteButtons hoursFaceActive={props.hoursFaceActive} hourClick={hour} minuteClick={minute} activeTime={props.activeTime}/>
            <AmPmButtons amActive={props.amActive} amClick={am} pmClick={pm} />
        </div>
    )
}

CurrentValuesView.propTypes = {
    activeTime: React.PropTypes.object,
    onClickFunctions: React.PropTypes.object,
    hoursFaceActive: React.PropTypes.bool,
    amActive: React.PropTypes.bool,
}

export default CurrentValuesView;