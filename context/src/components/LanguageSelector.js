import React, { Component } from "react";

class LanguageSelector extends Component {
    render() {
        return (
            <div>
                Select a language
                <i
                    className="flag us"
                    onClick={() => this.props.onLanguageChange("en")}
                />
                <i
                    className="flag nl"
                    onClick={() => this.props.onLanguageChange("du")}
                />
            </div>
        );
    }
}

export default LanguageSelector;
