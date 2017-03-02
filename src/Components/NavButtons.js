/**
 * Created by William on 23.02.2017.
 */
import React from "react"

import Button from "./Button"
import {FOOTER_HEIGHT} from "../ConstValues"

let styles = {
    height: FOOTER_HEIGHT+"px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    //border: "2px solid orange",
    fontSize: "0.75em",
    fontWeight: "bold",
    boxSizing: "border-box",
    padding: "0px 10px 7px 10px",
}

const NavButtons = (props) => {
    let {ok, cancel} = props.onClickFunctions
    return(
        <div style={styles}>
            <Button onClick={cancel}>CANCEL</Button>
            <Button onClick={ok}>OK</Button>
        </div>
    )
}

NavButtons.propTypes = {
    activeTime: React.PropTypes.object,
    onClickFunctions: React.PropTypes.object,
}

export default NavButtons;