/**
 * Created by William on 23.02.2017.
 */
import React from "react"
import moment from "moment"

import ClockFace from "./ClockFace"
import CurrentValuesView from "./CurrentValuesView"
import NavButtons from "./NavButtons"
import {TIMEPICKER_HEIGHT, TIMEPICKER_WIDTH, TIMEPICKER_COLOR} from "../ConstValues"

let styles = {
    flex: "1 0 "+TIMEPICKER_WIDTH+"px",
    height: TIMEPICKER_HEIGHT+"px",
    width: TIMEPICKER_WIDTH+"px",
    backgroundColor: TIMEPICKER_COLOR,
    color: "green",
    //border: "2px solid red",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    bottom: TIMEPICKER_HEIGHT/2+"px",
    position: "fixed",
}

class Timepicker extends React.Component {
    state = {
        activeTime: this.props.initialTime,
        hoursFaceActive: true,
        amActive: true,
    }

    componentWillMount() {
        //console.log("Component will mount!!!!")
    }

    componentDidMount() {
        this.setState({amActive: this.props.initialTime.hour() <  12})
        //console.log("Component DID mount")
    }

    componentWillUpdate(nextProps, nextState) {
        //Draw HAND!
        // AND circle!
        // To be rendered
    }

    componentWillUnmount() {
        //console.log("Component will unmount!!")
    }

    handlePmClick = () => {
        this.setState({amActive: false})
        this.state.amActive && this.state.activeTime.add(12, 'h')
        //console.log("PM clicked")
    }
    handleAmClick = () => {
        this.setState({amActive: true})
        !this.state.amActive && this.state.activeTime.subtract(12, 'h')
        //console.log("AM clicked")
    }
    handleHourClick = () => {
        this.setState({hoursFaceActive: true})
        //console.log("Hours clicked")
    }
    handleMinuteClick = () => {
        this.setState({hoursFaceActive: false})
        //console.log("Minutes clicked")
    }

    handleCancelClick = () => {
        this.props.unMount()
        console.log("Cancel clicked")
        //unmount w/o changes
    }
    handleOkClick = () => {
        this.props.updateTimeFields(this.state.activeTime)
        this.props.unMount()
        //console.log("Ok clicked")
    }

    handleHourChange = (hour) => {
        let newHour = this.state.amActive ? hour : hour + 12
        let newTime = this.state.activeTime.set('hour', newHour)
        this.setState({activeTime: newTime, hoursFaceActive: false})
    }
    handleMinuteChange = (minute) => {
        let newTime = this.state.activeTime.set('minute', minute)
        this.setState({activeTime: newTime})
    }

    render() {
        let currentValueViewFunctions = {hour: this.handleHourClick, minute: this.handleMinuteClick,
            pm: this.handlePmClick, am: this.handleAmClick}
        let clockFaceFunctions = {hour: this.handleHourChange, minute: this.handleMinuteChange}
        let navButtonsFunctions = {ok: this.handleOkClick, cancel: this.handleCancelClick}
        return (
            <div style={styles}>
                <CurrentValuesView activeTime={this.state.activeTime}
                                   onClickFunctions={currentValueViewFunctions}
                                   amActive={this.state.amActive}
                                   hoursFaceActive={this.state.hoursFaceActive}/>
                <ClockFace activeTime={this.state.activeTime}
                           onClickFunctions={clockFaceFunctions}
                           amActive={this.state.amActive}
                           hoursFaceActive={this.state.hoursFaceActive}/>
                <NavButtons activeTime={this.state.activeTime}
                            onClickFunctions={navButtonsFunctions}/>
            </div>
        )
    }
}

Timepicker.defaultProps = {
    initialTime: moment(),
}

Timepicker.propTypes = {
    unMount: React.PropTypes.func,
    updateTimeFields: React.PropTypes.func,
    initialTime: React.PropTypes.object,
}

export default Timepicker;