import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

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
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        );
    }
}

export default App;
