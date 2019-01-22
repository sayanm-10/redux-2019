import React, { Component } from "react";

import UserCreate from "./UserCreate";

class App extends Component {
    state = {
        language: "en"
    };

    onLanguageChange = lang => {
        this.setState({ language: lang });
    };

    render() {
        return (
            <div className="ui container">
                Select a language
                <i
                    className="flag us"
                    onClick={() => this.onLanguageChange("en")}
                />
                <i
                    className="flag nl"
                    onClick={() => this.onLanguageChange("du")}
                />
                <UserCreate />
            </div>
        );
    }
}

export default App;
