import React from "react";

const Loader = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.loadingText || "Loading..."}
            </div>
        </div>
    );
};

export default Loader;
