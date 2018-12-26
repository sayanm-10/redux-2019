import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMsg: ""
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                console.log(err);
                this.setState({ errorMsg: err.message });
            }
        );
    }

    render() {
        if (this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }

        if (!this.state.lat && this.state.errorMsg) {
            return <div>Error: {this.state.errorMsg}</div>;
        }

        return <div>Loading...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
