import React from "react";

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
        <div>
            <i className={`${iconName} icon`} />
            <h1>{message}</h1>
            <i className={`${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
