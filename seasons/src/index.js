import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Loader from "./components/Loader";
import SeasonDisplay from "./components/SeasonDisplay";

const App = () => {
    const [lat, setLat] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMsg(err.message)
        );
    }, []);

    let content;
    if (!lat && errorMsg) {
        content = <div>Error: {errorMsg}</div>;
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />;
    } else {
        content = <Loader loadingText="Please share location" />;
    }

    return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
