import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";

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
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
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
