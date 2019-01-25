import React from "react";
import ReactDOM from "react-dom";

import Loader from "./components/Loader";
import SeasonDisplay from "./components/SeasonDisplay";
import useLocation from "./components/useLocation";

const App = () => {
    const [lat, errorMsg] = useLocation();

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
