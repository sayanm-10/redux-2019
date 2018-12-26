import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./components/SeasonDisplay";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMsg: ""
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMsg: err.message })
        );
    }

    render() {
        if (this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat}>
                    Latitude: {this.state.lat}
                </SeasonDisplay>
            );
        }

        if (!this.state.lat && this.state.errorMsg) {
            return <div>Error: {this.state.errorMsg}</div>;
        }

        return <div>Loading...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
