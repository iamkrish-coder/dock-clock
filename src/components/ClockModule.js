import React, { Component } from "react"
import ClockUI from "./ClockUI";

class ClockModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datetime: new Date(),
        };
    }

    clockTicker() {
        this.setState({
            datetime: new Date()
        })

        this.currentHours = this.state.datetime.getHours().toString().padStart(2, '0');
        this.currentMinutes = this.state.datetime.getMinutes().toString().padStart(2, '0');
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.clockTicker(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            < ClockUI clockHours={this.currentHours} clockMinutes={this.currentMinutes} />
        )
    }
}

export default ClockModule;