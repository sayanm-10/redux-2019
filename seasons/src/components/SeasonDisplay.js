import React from "react";

import "../styles/SeasonDisplay.css";

const SeasonConfig = {
    summer: {
        message: "Time to hit the beach!",
        iconName: "sun"
    },
    winter: {
        message: "Damn, it's brisk!",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat >= 0 ? "summer" : "winter";
    } else {
        return lat >= 0 ? "winter" : "summer";
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { message, iconName } = SeasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{message}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
