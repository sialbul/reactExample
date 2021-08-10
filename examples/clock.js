import React from "react";
import ReactDom from "react-dom";

class Clock extends React.Component {
    state = { time: new Date.toLocaleTimeString() };

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
    }
    render() {
        return (
            <div>
                <div className="time">The time is: {this.state.time}</div>
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector("#root"));
