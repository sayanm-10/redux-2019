import React from "react";

const Loader = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.loadingText}</div>
        </div>
    );
};

Loader.defaultProps = {
    loadingText: "Loading..."
};

export default Loader;
