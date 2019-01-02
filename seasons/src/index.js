import React from "react";
import ReactDOM from "react-dom";

import Loader from "./components/Loader";
import SeasonDisplay from "./components/SeasonDisplay";

class App extends React.Component {
    state = {
        lat: null,
        errorMsg: ""
    };

    // ! Above state is equivalent to the constructor
    // ! Hence, constructor is NOT mandatory
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         lat: null,
    //         errorMsg: ""
    //     };
    // }

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

        return <Loader loadingText="Please share location" />;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
