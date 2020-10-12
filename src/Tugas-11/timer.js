import React, { Component } from 'react'

class Timer extends Component {
    constructor(props) {
        super(props)
        let date = new Date().toLocaleString(
            'id',
            {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            }).replace(/\./g, ":")
            
        this.state = {
            flag: true,
            timer: 100,
            clock: date
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.count(),
            1000
        )
        this.clock = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentDidUpdate() {
        if (this.state.flag && this.state.timer === 0) {
            this.stop()
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    stop() {
        this.componentWillUnmount()
        this.setState({ flag: false })
    }

    count() {
        this.setState({
            timer: this.state.timer - 1
        });
    }

    tick() {
        let date = new Date().toLocaleString(
            'id',
            {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            }).replace(/\./g, ":")

        this.setState({
            clock: date
        });
    }


    render() {
        return (
            <> {
                this.state.flag &&
                <h1 style={{ display: "flex", justifyContent: "space-around" }}>
                    <p>sekarang jam : {this.state.clock}</p>
                    <p>hitung mundur: {this.state.timer}</p>
                </h1>
            }
            </>
        )
    }
}

export default Timer