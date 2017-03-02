import React, { Component } from 'react';
import './App.css';
import moment from "moment";
import {List} from "immutable";

import Timepicker from "./Components/Timepicker"

let styles = {
    app: {
        margin: "0 auto",
        padding: "0",
        width: "100%",
        height: "100%",
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    inputFields: {
        width: "55px",
        cursor: "pointer",
        margin: "200px 0px 200px 0px",
    },

}

class App extends Component {
    state = {
        timeFields: List([
            moment().set({"hour":0, "minute":0}),
            moment().set({"hour":0, "minute":0}),
            moment().set({"hour":0, "minute":0}),
        ]),
        activeTimeField: null,
        timepickerVisible: false,
    }

    updateTimeFields = (newTime) => {
        let i = this.state.activeTimeField
        let newTimeFields = this.state.timeFields.update(i, () => newTime)
        this.setState({timeFields: newTimeFields})
    }

    mountTimepicker = (e) => {
        this.setState({activeTimeField: e.target.id, timepickerVisible: true})
    }
    unMountTimepicker = () => {
        this.setState({timepickerVisible: false})
    }

    render() {
        let currentTime = this.state.timeFields.toJS()[this.state.activeTimeField]
        const inputFields = this.state.timeFields.toJS().map((moment,i) => {
                return (
                    <input type="text"
                           key={i}
                           id={i}
                           style={styles.inputFields}
                           value={this.state.timeFields.toJS()[i].format('hh:mm a')}
                           readOnly="readOnly"
                           onSelect={this.mountTimepicker}
                           disabled={this.state.timepickerVisible}/>
                )})
        const timepicker = (this.state.timepickerVisible && <Timepicker
                                                                unMount={this.unMountTimepicker}
                                                                updateTimeFields={this.updateTimeFields}
                                                                initialTime={currentTime}
                                                                />)

        return (
            <div style={styles.app}>
                {inputFields}
                {timepicker}
            </div>
        );

    }
}

export default App;
